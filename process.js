const fs = require('fs').promises
const path = require('path')

const dirs = [
  '001-100',
  '101-200',
  '201-300',
  '301-400',
  '401-500',
  '501-600',
  '601-700',
  '701-800',
  '801-900'
]

const langExt = {
  'js': 'JavaScript',
  'py': 'Python',
  'go': 'Go',
  'rb': 'Ruby',
  'sql': 'SQL',
  'sh': 'Shell'
}

const sidebar = []

async function ensureDir(dir) {
  try {
    const stat = await fs.stat(dir)
  } catch (err) {
    await fs.mkdir(dir)
  }
}

async function process() {
  await ensureDir('build')

  for (let dir of dirs) {
    const files = await fs.readdir(dir)
    for (const file of files) {
      await parseEntry(dir, file)
    }
  }

  await writeIndex()
  await writeVuepressConf()
}

async function parseEntry(group, entry) {
  const dir = `${group}/${entry}`
  const files = await fs.readdir(dir)
  const readme = 'README.md'

  if (!files.includes(readme)) {
    return
  }

  const sols = files.filter(f => f.startsWith('sol'))
  const assets = files.filter(f => {
    return f !== readme && !f.startsWith('sol')
  })

  const readmeData = await fs.readFile(`${dir}/${readme}`, 'utf-8')
  const solsData = []

  for (const sol of sols) {
    const code = await fs.readFile(`${dir}/${sol}`, 'utf-8')
    const ext = path.extname(sol).slice(1)
    const solData = [`## ${langExt[ext]}\n`, '```' + ext, code, '```'].join('\n')
    solsData.push(solData)
  }

  // write readme
  const data = [readmeData, ...solsData].join('\n\n')
  await ensureDir(`build/${entry}`)
  await fs.writeFile(`build/${entry}/${readme}`, data)

  // copy assets
  assets.forEach(async asset => {
    await fs.copyFile(`${dir}/${asset}`, `build/${entry}/${asset}`)
  })

  // append sidebar
  const index = parseInt(entry.split('-')[0])
  const header = readmeData.split('\n')[0].slice(1).trim()
  sidebar.push([`/${entry}/`, `${index}. ${header}`])
}

async function writeIndex() {
  await fs.copyFile('README.md', 'build/README.md')
}

async function writeVuepressConf() {
  const conf = {
    title: 'Leetcode Solutions',
    themeConfig: {
      sidebar,
      sidebarDepth: 2
    }
  }

  const confData = `module.exports = ${JSON.stringify(conf, null, 2)}`

  await ensureDir(`build/.vuepress`)
  await fs.writeFile(`build/.vuepress/config.js`, confData)
}

process()
