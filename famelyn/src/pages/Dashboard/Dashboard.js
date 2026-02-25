import React, { useState, useMemo } from "react";
import "./Dashboard.css";
import { ordersData } from "./OrdersData";

const OrdersPage = () => {
  const [sortBy, setSortBy] = useState("latest");

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  // ✅ Sorting Logic
  const sortedOrders = useMemo(() => {
    let sorted = [...ordersData];

    switch (sortBy) {
      case "latest":
        return sorted.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );

      case "amount-high":
        return sorted.sort((a, b) => b.total_amount - a.total_amount);

      case "amount-low":
        return sorted.sort((a, b) => a.total_amount - b.total_amount);

      default:
        return sorted;
    }
  }, [sortBy]);

  return (
    <div className="orders-container">

      {/* Header */}
      <div className="orders-header">
        <div>
          <h1>Orders Listing</h1>
          <p>View and manage course purchases</p>
        </div>

        {/* ✅ Sort Dropdown */}
        <div className="sort-container">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-dropdown"
          >
            <option value="latest">Sort: Latest First</option>
            <option value="oldest">Sort: Oldest First</option>
            <option value="amount-high">Sort: Amount High → Low</option>
            <option value="amount-low">Sort: Amount Low → High</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Courses</th>
              <th>Subtotal</th>
              <th>GST %</th>
              <th>GST</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {sortedOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{order.customer_email}</td>
                <td>{order.customer_phone}</td>

                <td>
                  {order.courses.map((course) => (
                    <div key={course.course_id}>
                      • {course.course_name}
                    </div>
                  ))}
                </td>

                <td>{formatCurrency(order.subtotal)}</td>
                <td>{order.gst_percentage}%</td>
                <td>{formatCurrency(order.gst_amount)}</td>

                <td className="total-amount">
                  {formatCurrency(order.total_amount)}
                </td>

                <td>
                  <span className={`badge payment-${order.payment_status.toLowerCase()}`}>
                    {order.payment_status}
                  </span>
                </td>

                <td>
                  <span className={`badge status-${order.order_status.toLowerCase()}`}>
                    {order.order_status}
                  </span>
                </td>

                <td>{formatDate(order.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;