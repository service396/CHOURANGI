# Prebuilt preview

A committed build of the site, so it can be opened in a browser straight from
this repository without any hosting set up.

    https://raw.githack.com/service396/CHOURANGI/<commit-sha>/preview/index.html

Regenerate with `npm run build && rm -rf preview && cp -r dist preview`.

Once GitHub Pages is enabled (Settings -> Pages -> Source: GitHub Actions) the
workflow in .github/workflows/deploy.yml publishes the same build to
https://service396.github.io/CHOURANGI/ and this folder can be deleted.
