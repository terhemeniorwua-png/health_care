ke an old hospital website.

My recommendation:

Primary font: Manrope — headings, major numbers, navigation emphasis
Body font: Inter — paragraphs, forms, tables, descriptions
Primary color: Deep Healthcare Navy
Action color: Teal
Success: Green
Warning: Amber
Error: Red
Background: Very light cool gray
Cards: White
Avoid: excessive blue gradients, pure black, overly saturated colors

Below is a complete README/design specification you can use as the single design guide while building the project.

Modern Healthcare Platform

A modern, responsive healthcare ecosystem connecting patients, doctors, pharmacies, laboratories, clinics, hospitals, delivery partners, and administrators through one unified digital platform.

1. Product Vision

The platform should make healthcare easier to discover, book, purchase, manage, and access.

Instead of feeling like a traditional hospital website, the platform should feel like a modern healthcare marketplace.

The core question on the customer homepage should be:

How can we help you today?

Users should be able to:

Find doctors
Book appointments
Have online consultations
Find hospitals and clinics
Order healthcare products
Book laboratory tests
Request home sample collection
Receive digital prescriptions
Manage health records
Track orders
Manage appointments
Make payments
Receive notifications
2. User Types

The platform has multiple user experiences.

Customer / Patient

The patient uses the platform to:

Find healthcare providers
Book appointments
Consult doctors
Order medicines/products
Book laboratory tests
View prescriptions
View lab results
Manage health records
Track orders
Make payments
Leave reviews
Doctor

Doctors can:

Manage appointments
View patients
Conduct consultations
Write prescriptions
Add consultation notes
Review patient records
Manage availability
Communicate with patients
Track earnings
Pharmacy

Pharmacies can:

Manage products
Manage inventory
Receive orders
Process prescriptions where legally permitted
Manage deliveries
Manage customers
Track revenue
Laboratory

Laboratories can:

Manage tests
Receive bookings
Manage samples
Upload results
Notify patients
Manage appointments
Track laboratory operations
Clinic / Hospital

Healthcare facilities can:

Manage doctors
Manage appointments
Manage patients
Manage departments
Manage services
Manage schedules
Manage records
Manage payments
Administrator

The admin controls the ecosystem:

Users
Providers
Vendors
Doctors
Pharmacies
Laboratories
Hospitals
Courses/services
Orders
Appointments
Payments
Verification
Reviews
Reports
Disputes
Content
Platform settings
3. Design Philosophy

The interface should communicate:

Trust

Users are dealing with healthcare, so every important interaction should feel reliable.

Simplicity

Healthcare can already be complicated. The interface should not add complexity.

Calmness

Avoid aggressive colors and excessive animations.

Clarity

Users should immediately understand:

What something does
What happens next
Whether something succeeded
Whether action is required
Accessibility

Text must be readable.

Buttons must be easy to tap.

Color should never be the only way of communicating information.

4. Typography System

Use two fonts.

Primary Heading Font — Manrope

Use:

Manrope

For:

Page headings
Hero headings
Dashboard headings
Card headings
Navigation emphasis
Large statistics
Important numbers
Section headings

Recommended weights:

400 — Regular
500 — Medium
600 — SemiBold
700 — Bold
800 — ExtraBold

Main heading:

font-family: Manrope;
font-weight: 700;

Hero heading:

font-family: Manrope;
font-weight: 700;

Dashboard heading:

font-family: Manrope;
font-weight: 700;
5. Body Font — Inter

Use:

Inter

For:

Paragraphs
Descriptions
Forms
Inputs
Tables
Buttons
Labels
Medical information
Product descriptions
Small interface text

Recommended weights:

400 — Regular
500 — Medium
600 — SemiBold
700 — Bold

Body:

font-family: Inter;
font-weight: 400;

Labels:

font-family: Inter;
font-weight: 500;

Buttons:

font-family: Inter;
font-weight: 600;
6. Typography Hierarchy
Desktop
H1
48px
Line height: 1.1
Weight: 700
H2
36px
Line height: 1.2
Weight: 700
H3
28px
Line height: 1.25
Weight: 700
H4
22px
Line height: 1.3
Weight: 600
Body Large
18px
Line height: 1.6
Weight: 400
Body
16px
Line height: 1.6
Weight: 400
Small
14px
Line height: 1.5
Weight: 400
Caption
12px
Line height: 1.4
Weight: 500
7. Responsive Typography

Do not keep desktop typography unchanged on mobile.

Recommended:

Desktop H1: 48px
Tablet H1: 40px
Mobile H1: 32px

Desktop H2: 36px
Tablet H2: 30px
Mobile H2: 26px

Desktop H3: 28px
Tablet H3: 24px
Mobile H3: 22px

Use CSS clamp() where appropriate.

Example:

font-size: clamp(2rem, 5vw, 3rem);
8. Color System

The color system is divided into:

Brand colors
Background colors
Text colors
Border colors
Semantic colors
9. Primary Brand Color
Deep Healthcare Navy
#123B5D

This is the main brand color.

Use it for:

Logo
Primary navigation emphasis
Major headings when appropriate
Dark sections
Footer
Important healthcare branding
Selected sidebar items
Trust-oriented visual elements

It should communicate:

Trust + professionalism + stability

10. Primary Action Color
Healthcare Teal
#0F8B8D

This is the main action color.

Use it for:

Primary buttons
Booking buttons
Search actions
Active states
Important links
Selected controls
Progress indicators
Interactive elements

Example:

[ Book Appointment ]

The button should use:

Background: #0F8B8D
Text: #FFFFFF
11. Teal Hover
#0B7072

Use for:

Button hover
Link hover
Interactive hover states

Do not introduce random teal shades.

12. Light Teal
#E8F7F5

Use for:

Soft backgrounds
Healthcare feature cards
Selected filters
Information boxes
Icon backgrounds
Highlight sections

Example:

┌───────────────────────────┐
│ 🩺                         │
│ Find a Doctor              │
│ Connect with trusted care │
└───────────────────────────┘

The card background can use:

#E8F7F5
13. Main Background

Use:

#F7FAFC

This should be the primary application background.

Use it for:

Dashboard backgrounds
Search pages
Account pages
Marketplace pages
Admin pages

It is softer than pure white.

14. Card Background

Use:

#FFFFFF

Cards should generally be white.

Examples:

Doctor cards
Product cards
Appointment cards
Dashboard cards
Order cards
Vendor cards
15. Primary Text

Use:

#172B3A

For:

Headings
Important information
Main text
Product names
Doctor names

Avoid pure black #000000 for normal UI text.

16. Secondary Text

Use:

#5B6B7A

Use for:

Descriptions
Metadata
Secondary information
Dates
Supporting text

Example:

Dr. John Smith
Cardiologist

12 years experience

"Cardiologist" can use the secondary text color.

17. Muted Text

Use:

#8795A3

For:

Placeholder text
Disabled descriptions
Very low-priority metadata

Do not use muted text for important information.

18. Border Color

Use:

#E3EAF0

Use for:

Card borders
Input borders
Table borders
Dividers
Sidebar separators

Avoid excessive borders.

19. Success Color

Use:

#168A5B

For:

Successful payments
Completed appointments
Verified providers
Delivered orders
Successful registration

Light background:

#EAF7F1

Example:

✓ Payment Successful
20. Warning Color

Use:

#C78300

For:

Pending verification
Low inventory
Upcoming deadlines
Warnings

Light background:

#FFF5DE
21. Error Color

Use:

#C94141

For:

Failed payments
Invalid forms
Cancelled orders
Errors
Dangerous actions

Light background:

#FDECEC
22. Information Color

Use:

#3274A8

For:

Information messages
System information
Educational notices

Light background:

#EDF5FB
23. Complete Color Palette
BRAND

Primary Navy       #123B5D
Primary Teal       #0F8B8D
Teal Hover         #0B7072
Light Teal         #E8F7F5


BACKGROUND

Main Background    #F7FAFC
White              #FFFFFF


TEXT

Primary Text       #172B3A
Secondary Text     #5B6B7A
Muted Text         #8795A3


BORDERS

Border             #E3EAF0


SEMANTIC

Success            #168A5B
Success Background #EAF7F1

Warning            #C78300
Warning Background #FFF5DE

Error              #C94141
Error Background   #FDECEC

Info               #3274A8
Info Background    #EDF5FB
24. Where Each Color Should Be Used
Element	Color
Logo	#123B5D
Primary button	#0F8B8D
Button hover	#0B7072
Page background	#F7FAFC
Cards	#FFFFFF
Main heading	#172B3A
Body text	#5B6B7A
Muted text	#8795A3
Borders	#E3EAF0
Success	#168A5B
Warning	#C78300
Error	#C94141
Information	#3274A8
Soft healthcare background	#E8F7F5
Footer / dark sections	#123B5D
25. Buttons

There should be a clear button hierarchy.

Primary Button

Use for the most important action.

Background: #0F8B8D
Text: #FFFFFF

Examples:

Book Appointment
Order Now
Find a Doctor
Continue
Confirm Booking
Secondary Button
Background: #FFFFFF
Border: #0F8B8D
Text: #0F8B8D

Examples:

View Profile
Learn More
View Details
Dark Button

Use sparingly.

Background: #123B5D
Text: #FFFFFF
Destructive Button
Background: #C94141
Text: #FFFFFF

Examples:

Delete
Cancel Account
Remove
26. Border Radius

The platform should feel modern but professional.

Use:

Small:     8px
Medium:    12px
Large:     16px
XL:        20px
Pill:      999px

Recommended:

Inputs
12px
Cards
16px
Buttons
10px
Status badges
999px

Avoid making every component excessively rounded.

27. Shadows

Healthcare interfaces should not have huge dramatic shadows.

Use subtle shadows.

Example:

box-shadow: 0 4px 20px rgba(18, 59, 93, 0.06);

Cards should generally use:

White background
Subtle border
Very soft shadow

Not:

Huge shadow
Strong glow
Neon effect
28. Navigation
Public Navigation
Logo

Find Care
Medicines
Lab Tests
Hospitals
Health Services

Search

Login
[Get Started]

On mobile:

Logo                         ☰

The navigation should become a mobile menu.

29. Customer Homepage

Structure:

Header
↓
Hero
↓
Quick Healthcare Services
↓
Featured Doctors
↓
Popular Medicines
↓
Popular Lab Tests
↓
Trusted Healthcare Providers
↓
How It Works
↓
Health Articles
↓
Testimonials
↓
Mobile App Promotion
↓
CTA
↓
Footer
30. Hero Section

Main message:

Healthcare made simpler.

Supporting text:

Find trusted doctors, medicines, laboratories and healthcare services in one place.

Primary action:

Find a Doctor

Secondary action:

Order Medicine

Include a prominent search box:

Search doctors, medicines, hospitals or services
31. Quick Service Cards

Six major services:

Find a Doctor
Book Appointment
Order Medicine
Book Lab Test
Find Hospital
Home Healthcare

Use simple line icons.

Do not use excessive decorative illustrations.

32. Doctor Cards

Doctor cards should contain:

Profile image
Doctor name
Specialty
Verification badge
Rating
Experience
Location
Consultation fee
Availability
Action button

Example:

Dr. Sarah Williams
Cardiologist

✓ Verified
⭐ 4.9

12 years experience
Abuja

₦15,000 consultation

Available Today

[View Profile]
[Book]
33. Vendor Cards

Vendor cards should contain:

Logo / image
Vendor name
Vendor type
Verification status
Rating
Location
Opening status
Services
View button

Examples:

✓ Verified Pharmacy

HealthPlus Pharmacy
⭐ 4.8

Wuse, Abuja

Open now

[View Pharmacy]
34. Product Cards

Medicine/product cards should contain:

Image
Product name
Brand
Price
Availability
Rating where appropriate
Vendor
Add to Cart

Keep the design clean.

35. Dashboard Structure

Dashboards should use:

Sidebar
+
Top Navigation
+
Main Content

Desktop:

┌───────────────┬──────────────────────────┐
│               │ Topbar                   │
│   Sidebar     ├──────────────────────────┤
│               │                          │
│               │ Dashboard Content        │
│               │                          │
│               │                          │
└───────────────┴──────────────────────────┘

Mobile:

Topbar
↓
Content
↓
Bottom Navigation

Do not keep a large desktop sidebar on mobile.

36. Patient Dashboard

Top:

Good morning 👋

How can we help you today?

Then:

Upcoming Appointment

Then:

Orders

Then:

Health Overview

Then:

Recent Activity

Then:

Recommended Services
37. Patient Sidebar
Dashboard

Find Care
Appointments
Consultations

My Orders
Prescriptions
Lab Results
Medical Records

Messages
Notifications

Profile
Settings
38. Doctor Dashboard
Dashboard

Appointments
Schedule
Patients

Consultations
Prescriptions
Medical Records

Messages

Earnings
Analytics

Profile
Settings
39. Pharmacy Dashboard
Dashboard

Orders
Products
Inventory
Prescriptions

Customers
Deliveries

Payments
Analytics

Settings
40. Laboratory Dashboard
Dashboard

Test Orders
Samples
Patients
Results

Tests & Pricing
Reports
Analytics

Settings
41. Admin Dashboard
Dashboard

Users
Patients
Doctors
Vendors

Pharmacies
Laboratories
Clinics
Hospitals

Orders
Appointments
Payments
Payouts

Verification
Reviews
Disputes
Reports

Content
Notifications
Settings
42. Admin Dashboard Design

Admin should prioritize information density.

Show:

Total Users
Total Vendors
Total Doctors
Total Orders
Total Revenue
Pending Verification
Open Disputes

Then:

Revenue Analytics
User Growth
Orders
Appointments

Then:

Recent Transactions
Recent Registrations
Pending Approvals
43. Verification UX

Healthcare providers must be clearly marked.

Use:

✓ Verified

The badge should not rely only on color.

Example:

Dr. John Smith
Cardiologist

✓ Verified Provider

Admin verification:

Application

Business Information       ✓
Required Documentation     ✓
Professional Verification  ✓
Identity Verification      ✓

Status: Pending Review

[Approve]
[Request Changes]
[Reject]

Actual verification requirements should follow the laws and professional licensing requirements of the target country.

44. Search Experience

Search should be one of the strongest features.

Search:

What are you looking for?

Possible results:

Doctors
Hospitals
Pharmacies
Laboratories
Medicines
Healthcare Services
Health Articles

Example:

Search: "heart"

Doctors
→ Cardiologists

Hospitals
→ Cardiology departments

Articles
→ Understanding heart health
45. Appointment UX

The booking process should have very few steps.

Choose Doctor
↓
Choose Consultation Type
↓
Choose Date
↓
Choose Time
↓
Confirm Details
↓
Payment
↓
Confirmation

Show a progress indicator:

1 Doctor → 2 Time → 3 Details → 4 Payment
46. Appointment Confirmation

Use a clear success state:

✓ Appointment Confirmed

Dr. Sarah Williams
Cardiologist

Tuesday, September 8
4:00 PM

Video Consultation

Appointment ID: #AP2045

[Join Consultation]
[Add to Calendar]
47. Consultation Interface

Keep the consultation UI distraction-free.

┌──────────────────────────────────────┐
│ Doctor Information                   │
├──────────────────────────────────────┤
│                                      │
│          Video Consultation          │
│                                      │
│                         Patient      │
│                                      │
├──────────────────────────────────────┤
│ 🎤   📹   💬   📄       End          │
└──────────────────────────────────────┘

The doctor should have access to relevant patient information without overwhelming the consultation screen.

48. Medical Records

Use a timeline.

Medical History

September 2026
│
├── Consultation
│   Dr. Sarah Williams
│
├── Lab Result
│   Blood Test
│
└── Prescription
    Medication

This is easier to understand than a giant table.

49. Lab Results

Show results clearly.

Blood Test

Date: September 4

Test              Result     Range

Hemoglobin        14.2       ...
White Blood Cell  ...
Platelets         ...

[Download Result]

Medical information should prioritize clarity over visual decoration.

50. Order Tracking

Use a timeline:

✓ Order placed
✓ Pharmacy confirmed
✓ Preparing order
✓ Picked up
● Out for delivery
○ Delivered

Use icons and labels, not color alone.

51. Mobile Design

The application must be mobile-first.

Healthcare users may access the platform from:

Phones
Tablets
Laptops
Desktop computers

Mobile should not feel like a compressed desktop.

52. Mobile Bottom Navigation

Patient mobile navigation:

Home
Appointments
Orders
Messages
Profile

Keep the number of primary navigation items low.

53. Responsive Breakpoints

Use:

Mobile:
< 640px

Tablet:
640px – 1023px

Desktop:
1024px+

Large Desktop:
1280px+

Use flexible layouts instead of designing only for exact screen sizes.

54. Spacing System

Use a consistent spacing scale:

4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px

Most components should use multiples of 4 or 8.

55. Container Width

Desktop content:

max-width: 1280px

For some dense dashboards:

max-width: 1440px

Center the content:

margin-inline: auto;
56. Iconography

Use one icon system throughout the platform.

Recommended:

Lucide React

Use icons for:

Navigation
Search
Calendar
User
Hospital
Pharmacy
Laboratory
Shopping cart
Notifications
Settings
Messages
Medical services

Do not mix many unrelated icon styles.

57. Images

Healthcare imagery should feel:

Real
Professional
Diverse
Warm
Human

Avoid overly staged stock photos where possible.

Doctor imagery should communicate:

Competence + approachability

Patient imagery should communicate:

Comfort + trust

58. Cards

A standard card:

Background: #FFFFFF
Border: #E3EAF0
Radius: 16px
Padding: 20–24px
Shadow: subtle

Cards should have enough whitespace.

59. Forms

Forms are extremely important.

Input:

Height: 48–52px
Radius: 12px
Border: #E3EAF0
Background: #FFFFFF

Focus:

Border: #0F8B8D

Labels should always be visible.

Avoid relying only on placeholders.

60. Loading States

Do not leave blank screens while data loads.

Use:

Skeleton loaders
Spinners for short actions
Progress indicators for uploads

Example:

Doctor card
██████████████
████████
████████████
61. Empty States

Every major dashboard should have a useful empty state.

Example:

No upcoming appointments

You don't have any appointments scheduled yet.

[Find a Doctor]

Don't simply show:

No data.

Tell the user what they can do next.

62. Error States

Errors should explain what happened and what to do.

Bad:

Error 500

Better:

We couldn't load your appointments.

Please check your connection and try again.

[Try Again]
63. Accessibility

The platform must consider accessibility from the beginning.

Requirements:

Good color contrast
Keyboard navigation
Visible focus states
Proper labels
Accessible buttons
Alt text for meaningful images
Semantic HTML
Don't use color alone to communicate status
Large enough touch targets
64. Animation

Animations should be subtle.

Use animation for:

Page transitions
Modal opening
Dropdowns
Hover states
Loading
Toast notifications

Avoid:

Excessive bouncing
Large spinning elements
Distracting backgrounds
Constant movement

Recommended transition:

transition: all 200ms ease;
65. Recommended Frontend Stack

For this project:

Next.js
TypeScript
Tailwind CSS
Lucide React
React Hook Form
Zod
TanStack Query

For charts:

Recharts

For state where needed:

Zustand

For backend/API integration, the frontend should communicate with a proper backend rather than storing sensitive healthcare data only in the browser.

66. Suggested Next.js Structure
app/
│
├── (public)/
│   ├── page.tsx
│   ├── doctors/
│   ├── hospitals/
│   ├── pharmacies/
│   ├── laboratories/
│   ├── medicines/
│   ├── services/
│   └── articles/
│
├── auth/
│   ├── login/
│   ├── register/
│   ├── forgot-password/
│   └── verify/
│
├── patient/
│   ├── dashboard/
│   ├── appointments/
│   ├── consultations/
│   ├── orders/
│   ├── prescriptions/
│   ├── lab-results/
│   ├── medical-records/
│   ├── messages/
│   └── settings/
│
├── doctor/
│   ├── dashboard/
│   ├── appointments/
│   ├── patients/
│   ├── consultations/
│   ├── prescriptions/
│   ├── schedule/
│   └── earnings/
│
├── pharmacy/
│   ├── dashboard/
│   ├── orders/
│   ├── products/
│   ├── inventory/
│   ├── prescriptions/
│   └── analytics/
│
├── laboratory/
│   ├── dashboard/
│   ├── tests/
│   ├── samples/
│   ├── results/
│   └── patients/
│
├── provider/
│   ├── dashboard/
│   ├── doctors/
│   ├── patients/
│   ├── appointments/
│   └── services/
│
└── admin/
    ├── dashboard/
    ├── users/
    ├── vendors/
    ├── doctors/
    ├── orders/
    ├── appointments/
    ├── payments/
    ├── verification/
    ├── reviews/
    ├── disputes/
    ├── reports/
    └── settings/
67. Reusable Components

Create reusable components instead of writing everything separately.

components/
│
├── ui/
│   ├── Button
│   ├── Input
│   ├── Select
│   ├── Modal
│   ├── Badge
│   ├── Avatar
│   ├── Tabs
│   ├── Dropdown
│   ├── Tooltip
│   └── Skeleton
│
├── navigation/
│   ├── Navbar
│   ├── Sidebar
│   ├── MobileNav
│   └── Breadcrumb
│
├── healthcare/
│   ├── DoctorCard
│   ├── PharmacyCard
│   ├── HospitalCard
│   ├── LabCard
│   ├── AppointmentCard
│   ├── PrescriptionCard
│   ├── LabResultCard
│   └── HealthRecordCard
│
├── marketplace/
│   ├── ProductCard
│   ├── Cart
│   ├── OrderCard
│   └── OrderTimeline
│
└── dashboard/
    ├── StatCard
    ├── ChartCard
    ├── DataTable
    ├── ActivityFeed
    └── EmptyState
68. Customer User Flow
Homepage
    ↓
Search / Find Care
    ↓
Doctor / Hospital / Pharmacy / Lab
    ↓
View Details
    ↓
Book / Order
    ↓
Login / Register
    ↓
Confirm
    ↓
Payment
    ↓
Success
    ↓
Dashboard
    ↓
Track / Manage
69. Doctor User Flow
Register
    ↓
Verification
    ↓
Approval
    ↓
Doctor Dashboard
    ↓
Set Availability
    ↓
Receive Appointment
    ↓
Consult Patient
    ↓
Add Notes
    ↓
Prescription
    ↓
Complete Consultation
    ↓
Earnings
70. Pharmacy User Flow
Register
    ↓
Verification
    ↓
Approval
    ↓
Add Products
    ↓
Manage Inventory
    ↓
Receive Order
    ↓
Confirm Order
    ↓
Prepare
    ↓
Dispatch
    ↓
Completed
    ↓
Payout
71. Laboratory User Flow
Register
    ↓
Verification
    ↓
Approval
    ↓
Add Tests
    ↓
Receive Booking
    ↓
Collect Sample
    ↓
Process Test
    ↓
Upload Result
    ↓
Patient Notification
72. Admin Flow
Admin Login
    ↓
Dashboard
    ↓
Monitor Platform
    ↓
Verify Providers
    ↓
Manage Users
    ↓
Manage Vendors
    ↓
Monitor Orders
    ↓
Monitor Appointments
    ↓
Manage Payments
    ↓
Handle Disputes
    ↓
Analytics
73. Important UX Rule

Every page should answer three questions:

1. Where am I?

The user should always understand their location in the platform.

2. What can I do here?

The primary action should be obvious.

3. What happens next?

The interface should make the next step clear.

74. Healthcare Trust Elements

The platform should repeatedly communicate trust through:

✓ Verified provider
✓ Licensed professional
⭐ Patient reviews
📍 Verified location
🕐 Availability
🔒 Secure account
💳 Secure payment

Do not overuse badges.

Only show information that can actually be verified by the system.

75. What NOT to Do

Avoid:

❌ Pure black backgrounds everywhere
❌ Neon green
❌ Excessive gradients
❌ Huge shadows
❌ Too many colors
❌ Too many rounded elements
❌ Tiny text
❌ Cluttered dashboards
❌ Excessive animations
❌ Hospital-like outdated UI
❌ Making every page look identical
❌ Using color alone for medical status
76. Visual Personality

The final interface should feel:

Trustworthy      ██████████
Modern           █████████
Professional     ██████████
Calm             █████████
Friendly         ███████
Premium          ███████
Technical        █████

The goal is:

Modern healthcare technology with human warmth.

Not:

"Corporate hospital software."

77. Final Design Formula

Use this formula consistently:

MANROPE
    +
INTER
    +
#123B5D
    +
#0F8B8D
    +
#F7FAFC
    +
#FFFFFF
    +
Generous whitespace
    +
Subtle borders
    +
Soft shadows
    +
Clear hierarchy
    =
Modern Healthcare Platform
78. MVP Build Order

Do not build everything at once.

Build in this order:

Phase 1 — Foundation
Design system
Navbar
Footer
Buttons
Inputs
Cards
Modal
Responsive layout
Phase 2 — Public Website
Home
Doctors
Doctor Details
Hospitals
Pharmacies
Laboratories
Medicines
Services
Phase 3 — Authentication
Login
Register
Forgot Password
Verification
Role Selection
Phase 4 — Patient
Dashboard
Appointments
Doctor booking
Orders
Cart
Checkout
Prescriptions
Lab results
Medical records
Profile
Phase 5 — Providers
Doctor dashboard
Pharmacy dashboard
Laboratory dashboard
Clinic dashboard
Phase 6 — Admin
Admin dashboard
Users
Vendors
Verification
Orders
Appointments
Payments
Reports
Disputes
Analytics
Phase 7 — Advanced
Video consultation
Real-time notifications
Messaging
Order tracking
Advanced search
Analytics
Recommendations
79. Most Important Pages to Design First

If starting the Figma design today, design these first:

01. Homepage
02. Find Doctor
03. Doctor Profile
04. Appointment Booking
05. Patient Dashboard
06. Learning/Consultation Interface
07. Medicine Marketplace
08. Product Details
09. Cart
10. Checkout
11. Lab Tests
12. Patient Health Records
13. Doctor Dashboard
14. Pharmacy Dashboard
15. Laboratory Dashboard
16. Admin Dashboard
17. Vendor Verification
18. User Management

These pages establish almost the entire visual language of the product.

80. Final Goal

The finished product should feel like a combination of:

Healthcare
       +
Marketplace
       +
Telemedicine
       +
Pharmacy
       +
Laboratory
       +
Hospital Management
       +
Delivery
       +
Patient Health Records

But the user should never feel that complexity.

The complexity belongs behind the interface.

The patient should simply see:

Find care. Book care. Get care. Manage your health.

That is the central UX principle of the entire platform.

One recommendation before you start coding

Since you're building this as a full frontend, I would keep the design system above unchanged across the whole application. Don't give the pharmacy one color, the doctor dashboard another, and the admin dashboard another. Teal + navy should remain the brand language, while the semantic colors (green, amber, red) communicate status.

And for your specific Next.js project, I'd build the customer-facing experience first, then create the dashboards for doctor → pharmacy → laboratory → clinic → admin using the same reusable components. That will make the project much easier to maintain and will also make it look like one coherent product rather than several unrelated websites.