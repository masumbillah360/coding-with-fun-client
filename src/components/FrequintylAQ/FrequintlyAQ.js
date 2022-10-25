import React from 'react';

const FrequintlyAQ = () => {
    return (
      <div>
        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-accent-focus peer-checked:text-primary-content font-bold">
            What is cors ?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-300 text-base-content peer-checked:bg-accent-focus peer-checked:text-primary-content font-bold">
            Why are you using firebase? What other options do you have to
            implement authentication ?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-accent-focus peer-checked:text-primary-content font-bold">
            How does the private route work?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p>hello</p>
          </div>
        </div>


        <div className="collapse collapse-arrow mb-3 rounded">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-300 text-base-content peer-checked:bg-accent-focus peer-checked:text-primary-content font-bold">
            What is Node? How does Node work?
          </div>
          <div className="collapse-content bg-light text-white-content peer-checked:bg-slate-100 peer-checked:text-black-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    );
};

export default FrequintlyAQ;