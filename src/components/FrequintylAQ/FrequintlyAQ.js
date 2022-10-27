import React from 'react';

const FrequintlyAQ = () => {
    return (
      <div className=''>
        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-slate-500 peer-checked:text-primary-content font-bold">
            Who Made This Web App ?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p className="mt-3">
              This web app made by Masum Billah.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-300 text-base-content peer-checked:bg-slate-500 peer-checked:text-primary-content font-bold">
            Why make this app ?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p className="mt-3">It's Make for testing my reactJs skill. It's totaly challages for me. I accept this challage and that's The result.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-slate-500 peer-checked:text-primary-content font-bold">
            Which Technology used for this app ?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p className="mt-3">
              <li>ReactJs</li>
              <li>React Router</li>
              <li>Firebase</li>
              <li>Express Js</li>
            </p>
          </div>
        </div>


        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-300 text-base-content peer-checked:bg-slate-500 peer-checked:text-primary-content font-bold">
            Why React Js ?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p className="mt-3">React Js is the most pupuler library for making user interface and it's so fast and components base. Thats why reactJs. </p>
          </div>
        </div>
      </div>
    );
};

export default FrequintlyAQ;