# Upload alle afbeeldingen naar de R2 bucket "website".
# Gebruikt _images_opt\ (geoptimaliseerd, max 1600px) als die bestaat, anders _images\.
# Vereist eenmalig: npx wrangler login  (of $env:CLOUDFLARE_API_TOKEN)
# Gebruik:  .\upload-images.ps1

$bron = Join-Path $PSScriptRoot "_images_opt"
if (-not (Test-Path $bron)) {
    $bron = Join-Path $PSScriptRoot "_images"
}
if (-not (Test-Path $bron)) {
    Write-Error "Map _images_opt of _images niet gevonden. Draai eerst de download-stap."
    exit 1
}

$bestanden = Get-ChildItem $bron -Recurse -File
$totaal = $bestanden.Count
$n = 0
$fouten = 0

foreach ($f in $bestanden) {
    $n++
    # R2 key = relatief pad met forward slashes (bv. gallery/dieren/DSC_0087.jpg)
    $key = $f.FullName.Substring($bron.Length + 1) -replace '\\', '/'
    Write-Host "[$n/$totaal] $key"
    npx wrangler r2 object put "website/$key" --file="$($f.FullName)" --remote 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Upload mislukt: $key"
        $fouten++
    }
}

Write-Host ""
Write-Host "Klaar: $($totaal - $fouten)/$totaal geupload, $fouten fouten."
