import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import RemainingBudget from "./components/Remaining";


const App = () => {

const [selectValue,setSelectValue]=useState("£");
	const onChange =(e)=>{
		setSelectValue(e.target.value)
	}
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget selectValue={selectValue} />
          </div>
          <div className="col-sm">
            <RemainingBudget selectValue={selectValue} />
          </div>
          <div className="col-sm">
            <ExpenseTotal selectValue={selectValue} />
          </div>
          <div className="col-sm">
		  <div className="alert alert-secondary">
      <span>
        Currency:
        <select value={selectValue} name="currency" id="currency" onChange={onChange}>
          <option value="£">£ Pound</option>
          <option value="$">$ Dollar</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      </span>
    </div>
          </div>
        </div>
        <h3 className="mt-3">Allocation</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList selectValue={selectValue} />
          </div>
        </div>
        <h3 className="mt-3">Change allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm selectValue={selectValue} />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
