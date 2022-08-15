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
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--XkS2pez7--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q00qx8y8vihfhw3ng6fa.png',
    alt: 'image',
    heading: 'Run GUI Applicaiton inside Docker Container',
    para: 'Ever wonder how you can run GUI application inside a container?',
    link: 'https://dev.to/niteshthapliyal/run-gui-application-inside-docker-container-3npg'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--KOszsDAN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m3djekhpg8svn8ubklv9.png',
    alt: 'image',
    heading: 'Configuring Kubernetes Multi-Node Cluster using Ansible over AWS',
    para: 'In this blog, we will discuss how we can create Kubernetes multi-node cluster using Ansible role over Amazon Web Service (AWS)',
    link: 'https://dev.to/niteshthapliyal/configuring-kubernetes-multi-node-cluster-using-ansible-over-aws-2cki'
},

{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--xUPvATkn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1cugelnze8gv6z2w39iy.gif',
    alt: 'image',
    heading: 'WordPress configuration over AWS with Amazon RDS',
    para: 'In this blog, we will be configuring WordPress over AWS and will use AWS RDS as a backend for WordPress',
    link: 'https://dev.to/niteshthapliyal/wordpress-configuration-over-aws-with-amazon-rds-j76'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ccmSR4T5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zn0pmeo9yseuoohph380.png',
    alt: 'image',
    heading: 'Hadoop Configuration using Ansible',
    para: 'This blog contains the configuration or setup of the Hadoop cluster using Ansible',
    link: 'https://dev.to/niteshthapliyal/hadoop-configuration-using-ansible-3ena'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--TCD5yqG3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/8vu1litee2wa3zy5ese6.png',
    alt: 'image',
    heading: 'Setup that can ping Google but not Facebook',
    para: 'In this blog we are going to configure the routing table in such a way that it can ping Google but not Facebook',
    link: 'https://dev.to/niteshthapliyal/setup-that-can-ping-google-but-not-facebook-1ea4'
},
{
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8ddEfOx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/61s9aiuzz7fxom9kyzau.png',
    alt: 'image',
    heading: 'Create ML model inside the docker container',
    para: 'This blog contains the demonstration of how we can create a Machine learning model inside the docker container',
    link: 'https://dev.to/niteshthapliyal/create-ml-model-inside-the-docker-container-3b23'
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