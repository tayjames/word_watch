import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
    url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
    success: function(data) {
      $('.word-count').append(`Top word ${Object.keys(data.word)[0]} with a word count of ${Object.values(data.word)[0]}`)
    },
    error: function(error) {
      console.log(error)
    }
  })

  $('#breakdown').click(function() {
    let submission = $('#submission').val()

    $.ajax({
      type: 'POST',
      url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
      contentType: 'application/json',
      data: JSON.stringify({ word: { value: `${submission}`}}),
      success: function(response) {
        alert(`Successfully added ${submission}`)
        $('#submission').val('')
      },
      error: function(error) {
        console.log(error)
      }
    })
  })
})
