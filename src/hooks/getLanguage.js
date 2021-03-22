
const getLanguageColor = (language) => {
  switch (language) {
    case 'JavaScript':
      return '#f1e05a'
    case 'HTML':
      return '#e34c26'
    case 'CSS':
      return '#563d7c'
    case 'SCSS':
      return '#c6538c'
    case 'TypeScript':
      return '#2b7489'
    case 'Python':
      return '#3572a5'
    case 'Java':
      return '#b07219'
    default:
      return '#ccc'
  }
}

export default getLanguageColor
