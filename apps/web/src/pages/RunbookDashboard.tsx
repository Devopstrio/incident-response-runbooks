import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  ShieldCheck, 
  PlayCircle, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  BookOpen,
  Terminal,
  Zap
} from 'lucide-react';

const responseEfficiency = [
  { month: 'Jan', manual: 180, automated: 15 },
  { month: 'Feb', manual: 160, automated: 25 },
  { month: 'Mar', manual: 140, automated: 45 },
  { month: 'Apr', manual: 110, automated: 65 },
  { month: 'May', manual: 90, automated: 85 },
  { month: 'Jun', manual: 75, automated: 120 },
];

const runbookCategories = [
  { name: 'Security', value: 45, color: '#6366f1' },
  { name: 'Operations', value: 30, color: '#a855f7' },
  { name: 'Cloud', value: 15, color: '#ec4899' },
  { name: 'Compliance', value: 10, color: '#10b981' },
];

const KPI_CARDS = [
  { title: 'MTTR Redux', value: '-48%', trend: 'Since Automation', color: 'indigo', icon: Clock },
  { title: 'Evidence Ingested', value: '1.2k', trend: 'Audit Ready', color: 'indigo', icon: ShieldCheck },
  { title: 'Active Runbooks', value: '142', trend: 'V1.4.2 Latest', color: 'indigo', icon: BookOpen },
  { title: 'Auto-Steps', value: '82%', trend: 'Efficiency Peak', color: 'indigo', icon: Zap },
];

const RunbookDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Incident Response Execution</h1>
          <p className="text-slate-400">Institutional guided response procedures for global security and outages.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            New Runbook Template
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Execute Emergency Playbook
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-indigo-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-indigo-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Efficiency Trend */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Response Efficiency (Manual vs Automated Steps)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={responseEfficiency}>
                <defs>
                  <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="automated" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorAuto)" name="Automated Actions" />
                <Area type="monotone" dataKey="manual" stroke="#94a3b8" strokeWidth={2} fillOpacity={0} name="Manual Procedures" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Runbook Library Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Runbook Library Composition</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={runbookCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {runbookCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {runbookCategories.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Executions Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Live Guided Executions</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">Full Execution History</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Runbook / Incident</th>
                <th className="px-6 py-4 font-semibold">Executor</th>
                <th className="px-6 py-4 font-semibold">Progress</th>
                <th className="px-6 py-4 font-semibold">Latest Evidence</th>
                <th className="px-6 py-4 font-semibold">Time Elapsed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Ransomware Containment', id: 'IR-942', user: 'ir_admin_01', progress: 85, evidence: 'Encrypted_FS_Snapshot.png', time: '14m' },
                { name: 'Account Takeover Recovery', id: 'IR-938', user: 'soc_analyst_04', progress: 40, evidence: 'Auth_Log_Trace.json', time: '2h' },
                { name: 'Multi-Region Outage Drills', id: 'DR-721', user: 'sre_lead_02', progress: 10, evidence: 'Pre_Flight_Check.txt', time: '30m' },
              ].map((exec) => (
                <tr key={exec.id} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{exec.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{exec.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{exec.user}</td>
                  <td className="px-6 py-4">
                    <div className="w-full max-w-[100px] bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: `${exec.progress}%` }}></div>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 block">{exec.progress}% Complete</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded border border-indigo-400/20 w-fit">
                      <ShieldCheck size={12} />
                      {exec.evidence}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono italic">{exec.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RunbookDashboard;
