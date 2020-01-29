#!/usr/bin/env sh

#File From Vuepress Official Site With Some Edits
# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd ./docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/moaalaa/VuePress-Simple-Docs.git master:gh-pages

cd -