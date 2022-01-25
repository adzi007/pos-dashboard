import React, { PureComponent } from 'react'
// import './users.css'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'

const animatedComponent = makeAnimated()

class AutocompleteProduct extends PureComponent {
    state = { selectedUsers: [] }

    onChange = selectedUsers => {

      console.log("selectedUsers", selectedUsers);
      this.setState({
        selectedUsers: selectedUsers || []
      })
    }

    loadOptions=async (inputText, callback) => {
      const response = await fetch(`http://localhost:5000/product?search=${inputText}`)
      const json = await response.json()

      callback(json.data.map(i => (
        { 
          label: <div><img src={i.image} alt="" width="20px" /> <label>{i.name}</label> </div>,
          value: i.id  
        }
      )))
    }

    

    render () {

      console.log("state", this.state.selectedUsers);
      
      return (
      
        <AsyncSelect
          components={animatedComponent}
          value={this.state.selectedUsers}
          onChange={this.onChange}
          placeholder={'type something...'}
          loadOptions={this.loadOptions}

        />
      )
    }
}

export default AutocompleteProduct