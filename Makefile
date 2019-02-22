clear:
	rm -rf build

build: clear
	node process.js
	cd build && \
		vuepress build .

.SILENT: clear build
