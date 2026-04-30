import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import RunbookDashboard from './pages/RunbookDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The runbook orchestration engine is synchronizing guided procedures with global policy baselines. Access will be restored upon completion of the validation cycle.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<RunbookDashboard />} />
          <Route path="/runbooks" element={<Placeholder name="Guided Runbook Library" />} />
          <Route path="/active" element={<Placeholder name="Live Execution Tracking" />} />
          <Route path="/evidence" element={<Placeholder name="Immutable Evidence Vault" />} />
          <Route path="/history" element={<Placeholder name="Historical Response Analytics" />} />
          <Route path="/playbooks" element={<Placeholder name="Automated Remediation Playbooks" />} />
          <Route path="/cloud" element={<Placeholder name="Cloud Infrastructure Response" />} />
          <Route path="/audit" element={<Placeholder name="Compliance & Audit Packages" />} />
          <Route path="/analytics" element={<Placeholder name="Executive Efficiency Insights" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Integration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
