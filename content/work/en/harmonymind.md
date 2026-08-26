---
title: "HarmonyMind"
tagline: "Reducing access barriers to public mental health services"
year: 2024
area: "Product Design"
cover: "/images/work/harmonymind/cover.png"
order: 4
slug: "harmonymind"
locale: "en"
---

## Context & Business Problem

HarmonyMind was born from a number that's hard to ignore: **over 80% of Brazilians who need mental health care never reach a specialist**. The main barrier isn't a lack of services — the SUS (Brazil's public health system) operates CAPS centres (Community Mental Health Centres) across the entire country — but the opacity of the system: citizens don't know what's available, where it is, how to book or what to expect at a first appointment.

The project was developed in partnership with a public health organisation with the goal of reducing drop-off at the very start of the care journey.

---

## Constraints & Stakeholders

**Stakeholders involved:**
- CAPS municipal coordinators
- Psychologists and social workers
- Users in situations of psychosocial vulnerability
- Digital health system technical team

**Key constraints:**
- Full LGPD compliance on all screens collecting sensitive health data
- Mandatory accessibility: a significant portion of users access via low-end Android devices on 3G
- No real patient screens could be published (active NDA)
- Fixed 12-week timeline for the navigable MVP

---

<img src="/images/work/harmonymind/cover.png" alt="HarmonyMind — app screens on mobile device" />

## Research Process

We conducted **14 in-depth interviews** with users who had abandoned an attempt to book an appointment at some point. The patterns were consistent:

> "I went to the city hall website but I couldn't understand anything. I gave up."

> "I found a phone number but it rang twenty times and nobody answered."

**Friction map identified:**

1. **Discovery** — users didn't know free services existed
2. **Navigation** — the municipal portal mixed CAPS with emergency units and general clinics with no distinction
3. **Booking** — the only channel was by phone, with high abandonment rates
4. **Preparation** — users didn't know what to bring or what to expect, leading to no-shows

The research also uncovered a critical design insight: **users with severe anxiety reported abandoning booking attempts mid-way through long forms with many required fields**. The existing form had 22 fields.

---

<img src="/images/work/harmonymind/mockup.png" alt="HarmonyMind — final mockup on device" />

## The Hardest Decision

The most intense internal debate was about **form progressiveness in the booking flow**.

The health team wanted to capture all clinical data before the first appointment — understandable from a clinician's perspective. The user, on the other hand, was in a vulnerable emotional state with low tolerance for friction.

The decision was to split the process into **two moments**:

1. **Immediate booking (3 fields):** name, confirmation phone number, service needed
2. **Full clinical form (sent by message after booking confirmation)**

This approach reduced abandonment in the booking flow by **62% in usability testing** compared to the original form.

The argument that closed the discussion with clinical stakeholders: "A 22-field form that users abandon captures zero data. A 3-field form they complete captures enough for first contact."

---

<img src="/images/work/harmonymind/wireframes.png" alt="HarmonyMind — low-fidelity wireframes for the booking flow" />

## Final Solution

The delivered interface prioritised three principles:

**1. Clear location before any action**
Integrated map with filters by service type, physical accessibility and availability. No mandatory login to search.

**2. Progressive booking form**
Three-step flow with a visible progress indicator. Sensitive data fields labelled with an explanation of why the information is needed.

**3. Appointment preparation**
Confirmation screen with a checklist of what to bring, what to expect and direct contact with the unit — reducing no-shows caused by lack of information.

<img src="/images/work/harmonymind/desktop-map.png" alt="HarmonyMind — CAPS service map with filters" />

<img src="/images/work/harmonymind/desktop-booking.png" alt="HarmonyMind — progressive 3-step booking flow" />

**Accessibility delivered:**
- Minimum 4.5:1 contrast on all text elements (WCAG AA)
- Full keyboard navigation support
- Alt text on all functional images
- Forms with explicit labels and descriptive error messages

---

<img src="/images/work/harmonymind/screens.png" alt="HarmonyMind — full set of high-fidelity app screens" />

<img src="/images/work/harmonymind/final-screens.png" alt="HarmonyMind — final UI screens across the complete user journey" />

## Measurable Outcome

After launch of the MVP in two pilot municipalities:

- **62%** reduction in abandonment rate in the booking flow
- **+38%** bookings completed on first visit
- **Satisfaction score (CSAT):** 4.3/5 across 89 responses in the first 6 weeks
- Average booking time: down from 11 minutes to **3 minutes 40 seconds**

The project was presented at the Digital Health Innovation Forum and is currently expanding to additional municipalities.
