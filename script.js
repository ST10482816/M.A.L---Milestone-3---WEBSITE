const courseData = [
    {
        "courseId": "001",
        "courseName": "First Aid",
        "purpose": "To provide first aid awareness and basic life support",
        "content": [
            "Wounds and bleeding",
            "Burns and fractures",
            "Emergency scene management",
            "Cardio-Pulmonary Resuscitation (CPR)",
            "Respiratory distress e.g., Choking, blocked airway"
        ],
        "image": "assets/first-aid.jpg",
        "price": 1500,
        "duration": "6 months"
    },
    {
        "courseId": "002",
        "courseName": "Sewing",
        "purpose": "To provide alterations and new garment tailoring services",
        "content": [
            "Types of stitches",
            "Threading a sewing machine",
            "Sewing buttons, zips, hems and seams",
            "Alterations",
            "Designing and sewing new garments"
        ],
        "image": "assets/sewing.jpg",
        "price": 1500,
        "duration": "6 months"
    },
    {
        "courseId": "003",
        "courseName": "Landscaping",
        "purpose": "To provide landscaping services for new and established gardens",
        "content": [
            "Indigenous and exotic plants and trees",
            "Fixed structures (fountains, statues, benches, tables, built-in braai)",
            "Balancing of plants and trees in a garden",
            "Aesthetics of plant shapes and colours",
            "Garden layout"
        ],
        "image": "assets/landscaping.jpg",
        "price": 1500,
        "duration": "6 months"
    },
    {
        "courseId": "004",
        "courseName": "Life Skills",
        "purpose": "To provide skills to navigate basic life necessities",
        "content": [
            "Opening a bank account",
            "Basic labour law (know your rights)",
            "Basic reading and writing literacy",
            "Basic numeric literacy"
        ],
        "image": "assets/life-skills.jpg",
        "price": 1500,
        "duration": "6 months"
    },
    {
        "courseId": "005",
        "courseName": "Child Minding",
        "purpose": "To provide basic child and baby care",
        "content": [
            "Birth to six-month old baby needs",
            "Seven-month to one year old needs",
            "Toddler needs",
            "Educational toys"
        ],
        "image": "assets/child-minding.jpg",
        "price": 750,
        "duration": "6 weeks"
    },
    {
        "courseId": "006",
        "courseName": "Cooking",
        "purpose": "To prepare and cook nutritious family meals",
        "content": [
            "Nutritional requirements for a healthy body",
            "Types of protein, carbohydrates and vegetables",
            "Planning meals",
            "Tasty and nutritious recipes",
            "Preparation and cooking of meals"
        ],
        "image": "assets/cooking.jpg",
        "price": 750,
        "duration": "6 weeks"
    },
    {
        "courseId": "007",
        "courseName": "Garden Maintenance",
        "purpose": "To provide basic knowledge of watering, pruning and planting in a domestic garden",
        "content": [
            "Water restrictions and the watering requirements of indigenous and exotic plants",
            "Pruning and propagation of plants",
            "Planting techniques for different plant types"
        ],
        "image": "assets/garden-maintenance.jpg",
        "price": 750,
        "duration": "6 weeks"
    }
];

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
});

// Function to load 6-week courses (for sixWeek.html)
function loadSixWeekCourses() {
  const coursesGrid = document.getElementById('coursesGrid');
  if (!coursesGrid) return;

  // Filter courses with 6 weeks duration
  const sixWeekCourses = courseData.filter(course => course.duration === "6 weeks");

  // Create course cards
  sixWeekCourses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.addEventListener('click', () => {
      window.location.href = `individualCourse.html?courseId=${course.courseId}`;
    });

    courseCard.innerHTML = `
      <div class="course-title">${course.courseName}</div>
      <div class="course-details">
        <div><strong>Duration:</strong> ${course.duration}</div>
        <div><strong>Fees:</strong> R${course.price}</div>
        <div><strong>Purpose:</strong> ${course.purpose}</div>
      </div>
      <img src="${course.image}" alt="${course.courseName} Course" class="course-image" />
    `;

    coursesGrid.appendChild(courseCard);
  });
}

// Function to load 6-month courses (for sixMonth.html)
function loadSixMonthCourses() {
  const coursesGrid = document.getElementById('coursesGrid');
  if (!coursesGrid) return;

  // Filter courses with 6 months duration
  const sixMonthCourses = courseData.filter(course => course.duration === "6 months");

  // Create course cards
  sixMonthCourses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.addEventListener('click', () => {
      window.location.href = `individualCourse.html?courseId=${course.courseId}`;
    });

    courseCard.innerHTML = `
      <div class="course-title">${course.courseName}</div>
      <div class="course-details">
        <div><strong>Duration:</strong> ${course.duration}</div>
        <div><strong>Fees:</strong> R${course.price}</div>
        <div><strong>Purpose:</strong> ${course.purpose}</div>
      </div>
      <img src="${course.image}" alt="${course.courseName} Course" class="course-image" />
    `;

    coursesGrid.appendChild(courseCard);
  });
}

// Function to load individual course details (for individualCourse.html)
function loadIndividualCourse() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');
  const course = courseData.find(c => c.courseId === courseId);

  if (!course) {
    document.getElementById('courseTitle').innerText = 'Course Not Found';
    document.getElementById('courseDetails').innerText = 'The requested course could not be found.';
    return;
  }

  // Populate course title
  document.getElementById('courseTitle').innerText = course.courseName;

  // Populate course details
  document.getElementById('courseDetails').innerHTML = `
    <strong>Course Information</strong><br><br>
    Purpose: ${course.purpose}.<br>
    The content in this course provides learners with the ability to:
    <ul>
      ${course.content.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;

  // Populate duration and fees
  document.getElementById('courseDuration').innerText = `Duration: ${course.duration}`;
  document.getElementById('courseFees').innerText = `Price: R${course.price}`;

  // Populate course image
  const courseImage = document.getElementById('courseImage');
  courseImage.src = course.image;
  courseImage.alt = `${course.courseName} Course`;
}

// run specific function depending on the page 
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('sixWeeks.html')) {
    loadSixWeekCourses();
  } else if (window.location.pathname.includes('sixMonth.html')) {
    loadSixMonthCourses();
  } else if (window.location.pathname.includes('individualCourse.html')) {
    loadIndividualCourse();
  }
});



 // Calculate Fees Page Script
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.course-checkbox-item input[type="checkbox"]');
    const cartList = document.getElementById('cart-list');
    const courseData = {
        'First Aid': { label: 'First Aid (6 Months)', price: 1500 },
        'Sewing': { label: 'Sewing (6 Months)', price: 1500 },
        'Landscaping': { label: 'Landscaping (6 Months)', price: 1500 },
        'Life Skills': { label: 'Life Skills (6 Months)', price: 1500 },
        'Child Minding 6 Weeks': { label: 'First Aid (6 Weeks)', price: 750 },
        'Cooking 6 Weeks': { label: 'Sewing (6 Weeks)', price: 750 },
        'Garden Maintenance 6 Weeks': { label: 'Landscaping (6 Weeks)', price: 750 },

    };
// Get Quote Function
document.getElementById('get-quote').addEventListener('click', function() {
    const summarySection = document.getElementById('summary-section');
    const quantitySpan = document.getElementById('quantity');
    const vatSpan = document.getElementById('vat');
    const totalFeeSpan = document.getElementById('total-fee');

    let totalCourses = 0;
    let totalPrice = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            totalCourses++;
            const key = cb.value;
            const data = courseData[key];
            if (data) {
                totalPrice += data.price;
            }
        }
    });

    const vat = totalPrice * 0.15;
    const totalWithVat = totalPrice + vat;

    quantitySpan.textContent = totalCourses;
    vatSpan.textContent = `R${vat.toFixed(2)}`;
    totalFeeSpan.textContent = `R${totalWithVat.toFixed(2)}`;

    summarySection.style.display = 'block';
});
    // Create elements inside Cart container
    function updateCart() {
        cartList.innerHTML = '';
        checkboxes.forEach(cb => {
            if (cb.checked) {
                const key = cb.value;
                const data = courseData[key];
                if (data) {
                    const row = document.createElement('div');
                    row.className = 'cart-item';
                    row.innerHTML = `
                        <span><strong>${data.label}</strong></span>
                        <span><strong>Price: R${data.price}</strong></span>
                    `;
                    cartList.appendChild(row);
                }
            }
        });
    }
    //Adds items to cart when checkbox is checked
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateCart);
    });
    updateCart();
});


document.querySelector(".logo").addEventListener('click', ()=> {window.location.href = "index.html";
})
