import React, { useState } from 'react';
import './styles.css'

import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>

      <input 
        type="text" 
        placeholder='Digite um nome...'
        onChange={e => handleNameChange(e.target.value)}
      />

      <button type='button'>Adicionar</button>

      <Card name="Matheus" time="10:55:25"/>
      <Card name="João" time="11:00:10"/>
    </div>
  )
}
