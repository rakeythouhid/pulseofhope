


const reactionButtons = document.querySelectorAll('.reaction-btn');

reactionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
  
    reactionButtons.forEach(b => b.classList.remove('active'));
    
    btn.classList.add('active');
  });
});



const comments = [
  "This is comment 1",
  "This is comment 2",
  "This is comment 3",
  "This is comment 4",
  "This is comment 5",
  "This is comment 6",
  "This is comment 7",
  "This is comment 8",
  "This is comment 9"
];


const commentsPerPage = 3;

let currentPage = 1;


function showComments(page) {
  const container = document.getElementById('comments-container');
  container.innerHTML = ''; 


  const start = (page - 1) * commentsPerPage;
  const end = start + commentsPerPage;


  const pageComments = comments.slice(start, end);

  pageComments.forEach(comment => {
    const div = document.createElement('div');
    div.className = 'comment';
    div.textContent = comment;
    container.appendChild(div);
  });
}


document.querySelectorAll('.page-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentPage = parseInt(btn.textContent); 
    showComments(currentPage); 
  });
});


showComments(currentPage);
