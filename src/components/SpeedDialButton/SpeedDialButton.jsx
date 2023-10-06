import './SpeedDialButton.css'
import React, { useState,  } from 'react'
import { SpeedDial } from 'primereact/speeddial';

        

export const SpeedDialButton = ({products}) => {
  const [visible, setVisible] = useState(false);

  const actionItems = [
    { icon: 'pi pi-pencil', command: () => { } },
    { icon: 'pi pi-calendar-plus', command: () => { } },
    { icon: 'pi pi-file', command: () => { } }
  ];


  const addHelicopter = (data) =>{
    products.push(data)
  }

  const deleteHelicopter = (id) => {
    products = products.filter(item => item.id !==id)
  }

  const updateHelicopter = (id, data) => {
    products = products.map(item => {
      if(item.id == id){
        return data
      }
      return item
    })
  }
  return (
    <div>
      <SpeedDial model={actionItems} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />

    </div>
  )
}