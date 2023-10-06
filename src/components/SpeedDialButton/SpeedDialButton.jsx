import './SpeedDialButton.css'
import React, { useState, useCallback, useEffect } from 'react'
import { SpeedDial } from 'primereact/speeddial';

        

export const SpeedDialButton = () => {
  const [visible, setVisible] = useState(false);

  const actionItems = [
    { icon: 'pi pi-pencil', command: () => { } },
    { icon: 'pi pi-calendar-plus', command: () => { } },
    { icon: 'pi pi-file', command: () => { } }
  ];

  return (
    <div>
      <SpeedDial model={actionItems} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />

    </div>
  )
}