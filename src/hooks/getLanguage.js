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
    case 'Vue':
      return '#2c3e50'
    case 'PHP':
      return '#4F5D95'
    case 'C':
      return '#555555'
    case 'C++':
      return '#f34b7d'
    case 'C#':
      return '#178600'
    case 'Go':
      return '#00ADD8'
    default:
      return '#ccc'
  }
}

export default getLanguageColor
