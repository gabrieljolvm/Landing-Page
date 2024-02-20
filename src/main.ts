import "./styles/style.css";

const submitButton = document.querySelector<HTMLInputElement>("#submit");
const emailInput = document.querySelector("#email") as HTMLInputElement;
const scrollableComments = document.querySelector<HTMLInputElement>(".reviews-wrapper");
const errorMessage = document.querySelector<HTMLSpanElement>(".send-email-error");

scrollableComments?.addEventListener("wheel", (event)=>{
  event.preventDefault()
  if(event.deltaY > 0){
    scrollableComments.scrollLeft += 30;
  } else{
    scrollableComments.scrollLeft -= 30
  }
  
})

const errorStyle = {
  border: "1px solid red",
  color: "red"
}

const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
submitButton?.addEventListener("click", (event) => {
  
  if (!validEmail.test(emailInput.value)) {
    event.preventDefault()
    errorMessage!.textContent = "Please insert a valid email";
    emailInput.style.border = errorStyle.border;
    emailInput.style.color = errorStyle.color;;
 
  } else{
    alert("Enviado!")
  }
})