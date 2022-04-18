const props = {
    story: {
        currentStatus: "rejected",
    }
}

/* 
With a ternary, I can't tell the status of the default from reading the code.
For example, the only two statuses I know of are "Pending" and "Approved", but there is a third.
Since its color is red, I assume it is "Rejected".
What we are doing is essentially mapping the status to a color and we do not need the keys of the Object prototype so we can use a map to optimize this function.
Map (not the same as Array.prototype.map) is a data structure we were not introduced to in class.
For more information, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

// key-value pairs can be declared when creating a map

const statusColors = new Map([
    ["pending", "orange"],
    ["approved", "green"],
]);

// or we can set the key-value pairs after creating the map

statusColors.set("rejected", "red");

function getStatusColor(status) {
    return statusColors.get(status);
}

const currentStatusColor = getStatusColor(props.story.currentStatus);

// so, in the useEffect call, the status color can be set with:

/*
  const [statusColor, setStatusColor] = useState("");
  useEffect(() => {
      setStatusColor(getStatusColor(props.story.currentStatus));
  }, [props.story.currentStatus]);
*/

// This will also ensure that the component will re-render when the status changes.

console.log(`Current Status: ${props.story.currentStatus}, Status Color: ${currentStatusColor}`);
