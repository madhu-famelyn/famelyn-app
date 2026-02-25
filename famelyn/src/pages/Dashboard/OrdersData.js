// OrdersData.js

export const ordersData = [
  {
    id: 1,
    customer_name: "Madhumitha",
    customer_email: "madhu@gmail.com",
    customer_phone: "+91 9876543210",
    courses: [
      { course_id: 1, course_name: "React Mastery" },
      { course_id: 2, course_name: "FastAPI Bootcamp" }
    ],
    subtotal: 5000,
    gst_percentage: 18,
    gst_amount: 900,
    total_amount: 5900,
    payment_status: "SUCCESS",
    order_status: "COMPLETED",
    created_at: "2026-02-20T10:30:00"
  }
];