"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-border bg-white p-6 text-center sm:p-8"
        role="status"
      >
        <p className="font-display text-2xl tracking-tight text-foreground">
          Message sent
        </p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
          Thanks for reaching out. Our team will get back to you at the email
          you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/70 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-[0.9375rem] outline-none focus:border-neutral-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-[0.9375rem] outline-none focus:border-neutral-400"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-foreground"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-[0.9375rem] outline-none focus:border-neutral-400"
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="general">General inquiry</option>
            <option value="mentorship">Mentorship support</option>
            <option value="mentor-application">Become a mentor</option>
            <option value="university">University partnership</option>
            <option value="plus">Mentorle Plus</option>
            <option value="privacy">Privacy or legal</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1.5 w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-[0.9375rem] outline-none focus:border-neutral-400"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
