// OrdersData.js

export const ordersData = [
  {
    id: 1,
    order_id: "ORD-1001",
    customer_name: "Madhumitha",
    customer_email: "madhu@gmail.com",
    customer_phone: "9876543210",
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
  },
  {
    id: 2,
    order_id: "ORD-1002",
    customer_name: "Vijay Lakshmi",
    customer_email: "vijay@gmail.com",
    customer_phone: "9123456780",
    courses: [
      { course_id: 3, course_name: "Node.js Advanced" }
    ],
    subtotal: 3000,
    gst_percentage: 18,
    gst_amount: 540,
    total_amount: 3540,
    payment_status: "PENDING",
    order_status: "PROCESSING",
    created_at: "2026-02-22T14:45:00"
  }
];