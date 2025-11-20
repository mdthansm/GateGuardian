"use client";

import React, { useState } from "react";
import FieldSupervisorLayout from "./FieldSupervisorLayout";
import { Clock, MapPin, User, Camera, Save } from "lucide-react";
import { LogIn, LogOut } from "lucide-react";


const EntryExitPage: React.FC = () => {
  const [entryType, setEntryType] = useState<"IN" | "OUT" | null>(null);
  const [staffId, setStaffId] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [shift, setShift] = useState("");
  const [notes, setNotes] = useState("");

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const handleSaveEntry = () => {
    console.log("Saving entry...");
  };

  return (
    <FieldSupervisorLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Entry / Exit</h1>
          <p className="text-sm text-gray-500">Record staff movement at the gate</p>
        </div>

        {/* Current Time Card */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-xs text-gray-600 mb-0.5">Current Time</div>
              <div className="text-xl font-bold text-gray-900">{currentTime}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Recorded by</div>
            <div className="text-sm font-medium text-gray-900">Demo Field Supervisor</div>
          </div>
        </div>

        {/* Record Movement Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Record Movement</h2>
            <p className="text-sm text-gray-500">All fields are required for accurate tracking</p>
          </div>

          {/* Entry Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Entry Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setEntryType("IN")}
                className={`flex items-center justify-center gap-2 py-4 px-6 rounded-lg border-2 transition-all ${
                  entryType === "IN"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <LogIn className="w-5 h-5" />
                <span className="font-medium">IN</span>
              </button>
              <button
                onClick={() => setEntryType("OUT")}
                className={`flex items-center justify-center gap-2 py-4 px-6 rounded-lg border-2 transition-all ${
                  entryType === "OUT"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">OUT</span>
              </button>
            </div>
          </div>

          {/* Staff ID */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Staff ID <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter staff ID"
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Post and Shift */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Post <span className="text-red-500">*</span>
              </label>
              <select
                value={post}
                onChange={(e) => setPost(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              >
                <option value="">Select post</option>
                <option value="gate1">Gate 1</option>
                <option value="gate2">Gate 2</option>
                <option value="mainentrance">Main Entrance</option>
                <option value="backgate">Back Gate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shift <span className="text-red-500">*</span>
              </label>
              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              >
                <option value="">Select shift</option>
                <option value="morning">Morning (6 AM - 2 PM)</option>
                <option value="afternoon">Afternoon (2 PM - 10 PM)</option>
                <option value="night">Night (10 PM - 6 AM)</option>
              </select>
            </div>
          </div>

          {/* Photo Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo (Optional)
            </label>
            <button className="w-full py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-blue-600">
              <Camera className="w-6 h-6" />
              <span className="text-sm font-medium">Take Photo</span>
            </button>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes (Optional)
            </label>
            <textarea
              placeholder="Add any additional notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveEntry}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Entry
          </button>
        </div>
      </div>
    </FieldSupervisorLayout>
  );
};

export default EntryExitPage;