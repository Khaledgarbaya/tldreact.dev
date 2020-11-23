var client = algoliasearch('HFGZHYU664', '1c8f9ae77d5a1c12c113a1c4fbbdb586')
var index = client.initIndex('tldreact')
console.log('works')
autocomplete('#search-input', {hint: false, keyboardShortcuts: ['s']}, [
  {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    displayKey: 'title',
    templates: {
      suggestion: function (suggestion) {
        return `<p class="border">${suggestion._highlightResult.title.value}</p>`
      },
    },
  },
]).on('autocomplete:selected', function (event, suggestion, dataset) {
  console.log(suggestion)
  document.location = suggestion.url
})
