export default {
    bind(el, binding, vnode) {
      el.addEventListener("input", function(event) {
        // Remove any non-numeric characters
        let value = event.target.value.replace(/[^0-9]/g, "");
        // Format the value with comma-separated thousands
        value = parseInt(value, 10).toLocaleString("en-US");
        // Update the input value
        if(value === 'NaN') value ='0'
        vnode.componentInstance.$emit("input", value);
      });
    }
  };