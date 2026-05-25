import React from 'react'
import PageHeader from '../../components/PageHeader'

const Input = ({ label, placeholder, type = 'text' }) => (
  <div>
    <label className="text-xs text-slate-400 block mb-1">{label}</label>
    <input type={type} placeholder={placeholder} className="form-input w-full"/>
  </div>
)

const Section = ({ title, children }) => (
  <div className="card-glass p-5 mb-6">
    <h2 className="text-xl font-semibold text-white mb-5">{title}</h2>
    {children}
  </div>
)

const RoleButton = ({ text }) => (
  <button className="bg-slate-700 hover:bg-emerald-600 transition rounded px-4 py-3 text-sm font-medium">{text}</button>
)

export default function UserProfilePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader title="Manage User" subtitle="Admin user profile management" />

      <Section title="Login Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="User ID" placeholder="AURA0001" />
          <Input label="User Name" placeholder="nish" />
          <Input label="Password" placeholder="Password" type="password" />
          <Input label="Re-type Password" placeholder="Re-enter password" type="password" />
          <Input label="User Type" placeholder="Internal" />
          <Input label="User Level" placeholder="Administrator" />
        </div>
      </Section>

      <Section title="Personal Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="First Name" placeholder="Nish" />
          <Input label="Middle Name" placeholder="A" />
          <Input label="Last Name" placeholder="Patel" />
          <Input label="Telephone" placeholder="555-555-5555" />
          <Input label="Mobile" placeholder="222-277-7777" />
          <Input label="Fax" placeholder="333-333-3333" />
          <Input label="Email" placeholder="email@example.com" />
          <Input label="Department" placeholder="Department" />
          <Input label="Designation" placeholder="Designation" />
          <Input label="Expiry Date" placeholder="dd-mm-yyyy" type="date" />
          <Input label="Password Expiry Date" placeholder="dd-mm-yyyy" type="date" />
          <div>
            <label className="text-xs text-slate-400 block mb-1">Signature</label>
            <input type="file" className="form-input w-full"/>
          </div>
        </div>
      </Section>

      <Section title="Roles(s) Assign">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Access to All Divisions','Access to All Reports','AGENT','CARRIER','CLIENT','Quote','Home Owners Quote','Lender / Real Estate Owned Quote','Satinwood Wind Buy Back Quote','Report','ROLE','USER','Spicewood Quote','Super Admin','USER1'].map(t=><RoleButton key={t} text={t}/>)}
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Assign Agent(s)">
          <div className="mb-4"><input placeholder="Search Agents" className="form-input w-full"/></div>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {['Churchill Insurance','Galligan Associates','Heffernan Insurance','Tsuneishi Agency','Century Insurance'].map((item)=>(
              <div key={item} className="bg-slate-800 rounded p-3 flex items-center justify-between">
                <div className='flex items-center gap-3'><input type='checkbox' defaultChecked className='w-4 h-4 accent-emerald-500'/><span>{item}</span></div><button className="text-emerald-400">●</button>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Assign Carrier(s)">
          <div className="mb-4"><input placeholder="Search Carriers" className="form-input w-full"/></div>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {['At-Bay Insurance','RSUI Indemnity','Mitsui Insurance','Protexure Insurance','Accredited Specialty'].map((item)=>(
              <div key={item} className="bg-slate-800 rounded p-3 flex items-center justify-between">
                <div className='flex items-center gap-3'><input type='checkbox' defaultChecked className='w-4 h-4 accent-emerald-500'/><span>{item}</span></div><button className="text-emerald-400">●</button>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="flex justify-end gap-3">
        <button className="btn-secondary">Reset</button>
        <button className="btn-primary">Save</button>
      </div>
    </div>
  )
}
