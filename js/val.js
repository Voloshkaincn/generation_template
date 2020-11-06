
$(document).ready(function(){


	$("#callback").validate({
		rules:
		{
			name:
			{
				required:true,
				minlength: 3
			},
			email: {
				required:true,
				email:true
			},
			phone:
			{
				required:true
			},
			password:
			{
				required:true

			},
			country:
			{
				required:true

			},



		},
		messages :
		{
			name:
			{
				required: "Это поле должно быть заполнено",
				minlength: " Это поле должно содержать более 2х символов"
			},
			email: {
				required: "Это поле должно быть заполнено",
				email : "Введите корректный email"
			},
			phone:
			{
				required: "Это поле должно быть заполнено"
			},
			password:
			{
				required: "Это поле должно быть заполнено"

			},
			country:
			{
				required: "Это поле должно быть заполнено"

			}
		}
	});
	$("#callback").validate({
		rules:
		{
			name:
			{
				required:true,
				minlength: 3
			},
			email: {
				required:true,
				email:true
			},
			phone:
			{
				required:true
			},
			password:
			{
				required:true

			},
			country:
			{
				required:true

			},



		},
		messages :
		{
			name:
			{
				required: "Это поле должно быть заполнено",
				minlength: " Это поле должно содержать более 2х символов"
			},
			email: {
				required: "Это поле должно быть заполнено",
				email : "Введите корректный email"
			},
			phone:
			{
				required: "Это поле должно быть заполнено"
			},
			password:
			{
				required: "Это поле должно быть заполнено"

			},
			country:
			{
				required: "Это поле должно быть заполнено"

			}
		}
	});

	$("#singin").validate({
		rules:
		{
			name:
			{
				required:true,
				minlength: 3
			},
			email: {
				required:true,
				email:true
			},
			phone:
			{
				required:true
			},
			password:
			{
				required:true

			},
			country:
			{
				required:true

			},



		},
		messages :
		{
			name:
			{
				required: "Это поле должно быть заполнено",
				minlength: " Это поле должно содержать более 2х символов"
			},
			email: {
				required: "Это поле должно быть заполнено",
				email : "Введите корректный email"
			},
			phone:
			{
				required: "Это поле должно быть заполнено"
			},
			password:
			{
				required: "Это поле должно быть заполнено"

			},
			country:
			{
				required: "Это поле должно быть заполнено"

			}
		}
	});

	$("#registration").validate({
		rules:
		{
			name:
			{
				required:true,
				minlength: 3
			},
			email: {
				required:true,
				email:true
			},
			phone:
			{
				required:true
			},
			password:
			{
				required:true

			},
			country:
			{
				required:true

			},



		},
		messages :
		{
			name:
			{
				required: "Это поле должно быть заполнено",
				minlength: " Это поле должно содержать более 2х символов"
			},
			email: {
				required: "Это поле должно быть заполнено",
				email : "Введите корректный email"
			},
			phone:
			{
				required: "Это поле должно быть заполнено"
			},
			password:
			{
				required: "Это поле должно быть заполнено"

			},
			country:
			{
				required: "Это поле должно быть заполнено"

			}
		}
	});

	$("#pass").validate({
		rules:
		{
			name:
			{
				required:true,
				minlength: 3
			},
			email: {
				required:true,
				email:true
			},
			phone:
			{
				required:true
			},
			password:
			{
				required:true

			},
			country:
			{
				required:true

			},
			code:
			{
				required:true

			}



		},
		messages :
		{
			name:
			{
				required: "Это поле должно быть заполнено",
				minlength: " Это поле должно содержать более 2х символов"
			},
			email: {
				required: "Это поле должно быть заполнено",
				email : "Введите корректный email"
			},
			phone:
			{
				required: "Это поле должно быть заполнено"
			},
			password:
			{
				required: "Это поле должно быть заполнено"

			},
			country:
			{
				required: "Это поле должно быть заполнено"

			},
			code:
			{
				required: "Это поле должно быть заполнено"

			}
		}
	});

	$("form").validate({
		rules:
		{
			name:
			{
				required:true,
				minlength: 3
			},
			email: {
				required:true,
				email:true
			},
			phone:
			{
				required:true
			},
			password:
			{
				required:true

			},
			country:
			{
				required:true

			},
			code:
			{
				required:true

			}



		},
		messages :
		{
			name:
			{
				required: "Это поле должно быть заполнено",
				minlength: " Это поле должно содержать более 2х символов"
			},
			email: {
				required: "Это поле должно быть заполнено",
				email : "Введите корректный email"
			},
			phone:
			{
				required: "Это поле должно быть заполнено"
			},
			password:
			{
				required: "Это поле должно быть заполнено"

			},
			country:
			{
				required: "Это поле должно быть заполнено"

			},
			code:
			{
				required: "Это поле должно быть заполнено"

			}
		}
	});

	$("form").submit(function(e) { //устанавливаем событие отправки для формы с id=form

		if ($(this).valid() == false ) {

		}

		else
		{
			e.preventDefault();
			$('html,body').css('overflow', 'hidden');
			$('.pp').removeClass('show');
			$('.pp[data-pp="success"]').addClass('show');
		}
	});

});

