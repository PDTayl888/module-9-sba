    
import { Dashboard } from './../components/Dashboard/Dashboard';
    
    


    const [filter, setFilter] = useState({ status: "all", priority: "all" });

  const filteredTasks = tasks
    .filter((task) => filter.status === "all" || task.status === filter.status)
    .filter(
      (task) => filter.priority === "all" || task.priority === filter.priority,
    );


  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "67",
      title: "Do that thing",
      description: "that thing that ya gotta do",
      status: "pending",
      priority: "low",
      dueDate: "8-8-2008",
    },
    {
      id: "7",
      title: " that other thing",
      description: "much different than the other one",
      status: "pending",
      priority: "medium",
      dueDate: "9-23-78",
    },
    {
      id: "11",
      title: "Be born",
      description: "hello world, literally",
      status: "completed",
      priority: "low",
      dueDate: "2-21-1980",
    },
    {
      id: "420",
      title: "Mow the laundry",
      description: "make sure to separate darks",
      status: "pending",
      priority: "high",
      dueDate: "11-12-2013",
    },
    {
      id: "007",
      title: "fold the lawn",
      description: "set mower to stun",
      status: "completed",
      priority: "low",
      dueDate: "9-11-2001",
    },
  ]);



    
