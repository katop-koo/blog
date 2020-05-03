import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    langPrefix: 'language-',
    preset: 'default',
    linkify: false,
    breaks: true,
    html: true,
    typegraphy: true,
  }})

  inject('md', md)
}
