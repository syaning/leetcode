clear:
	rm -rf build

build: clear
	node pre-build.js
	cd build && vuepress build .

build-gh-pages: clear
	BUILD_ENV=gh-pages node pre-build.js
	cd build && vuepress build .

publish: build-gh-pages
	cd build/.vuepress/dist && \
		git init && \
		git add -A && \
		git commit -m "build" && \
		git push -f https://github.com/syaning/leetcode.git master:gh-pages

.SILENT: clear build publish
