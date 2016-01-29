select Name from Employee e 
	where e.ManagerId is not null and e.Salary>(Select Salary 
			from Employee where e.ManagerId=Id)