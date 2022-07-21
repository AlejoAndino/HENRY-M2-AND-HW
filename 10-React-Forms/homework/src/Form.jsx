import React from 'react';

export default function  Form() {
  return (
    <form>
      <div>
        <label htmlFor="">Username:</label>
        <input type="text" name='username' />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name='password' />
      </div>
      <div>
        <input type="submit" name='submit'/>
      </div>
    </form>
  )
}
