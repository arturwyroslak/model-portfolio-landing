// Basic interactive enhancements for portfolio landing
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('bookingForm');
  if(form){
    form.addEventListener('submit',async(e)=>{
      e.preventDefault();
      const data=new FormData(form);
      const payload=Object.fromEntries(data.entries());
      // For demo: pretend to send and show success
      console.log('Booking payload',payload);
      alert('Dziękuję — zapytanie wysłane!');
      form.reset();
    });
  }
});
