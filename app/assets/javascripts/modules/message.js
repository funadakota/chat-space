$(function(){
  console.log(last_message_id)
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
          <div class="Message-Info">
            <div class="Message-Info__Name">
              ${message.user_name}
            </div>
            <div class="Message-Info__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="Message-Info">
          <div class="Message-Info__Name">
            ${message.user_name}
          </div>
          <div class="Message-Info__Date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.New-message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__Message-list').append(html);
      $('.Chat-main__Message-list').animate({ scrollTop: $('.Chat-main__Message-list')[0].scrollHeight});
      $('form')[0].reset();
    })
    .always(function(data){
      $(".Submit-btn").prop("disabled", false);
    });
  });
});

