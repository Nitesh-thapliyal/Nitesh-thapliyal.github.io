const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


const blogData = [{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--EPAmrzdD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2pfqg9722bu92rfwpu6l.png',
    heading: 'Run GUI Applicaiton inside Docker Container',
    para: 'Ever wonder how you can run GUI application inside a container?',
    link: '#'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--EPAmrzdD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2pfqg9722bu92rfwpu6l.png',
    heading: 'Run GUI Applicaiton inside Docker Container',
    para: 'Ever wonder how you can run GUI application inside a container?',
    link: '#'
},

{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--EPAmrzdD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2pfqg9722bu92rfwpu6l.png',
    alt: 'image',
    heading: 'Run GUI Applicaiton inside Docker Container',
    para: 'Ever wonder how you can run GUI application inside a container?',
    link: '#'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--EPAmrzdD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2pfqg9722bu92rfwpu6l.png',
    alt: 'image',
    heading: 'Run GUI Applicaiton inside Docker Container',
    para: 'Ever wonder how you can run GUI application inside a container?',
    link: '#'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--EPAmrzdD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2pfqg9722bu92rfwpu6l.png',
    alt: 'image',
    heading: 'Run GUI Applicaiton inside Docker Container',
    para: 'Ever wonder how you can run GUI application inside a container?',
    link: '#'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--EPAmrzdD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2pfqg9722bu92rfwpu6l.png',
    alt: 'image',
    heading: 'Run GUI Applicaiton inside Docker Container',
    para: 'Ever wonder how you can run GUI application inside a container?',
    link: '#'
}
]


const blogSection = document.querySelector('.blog')

blogData.forEach(blogInsert)

function blogInsert(data) {
    let blogData = `<div class="blog-box">
    <div>
      <div class="blog-image"><img src ="${data.image}"alt="${data.alt}"></div>
      <div class="blog-content">
        <h1>${data.heading}</h1>
        <p>${data.para}</p>
      </div>
    </div>
    <div class="blog-button"><a href="${data.link}">Read More</a></div>
  </div>`
    blogSection.innerHTML += blogData
}