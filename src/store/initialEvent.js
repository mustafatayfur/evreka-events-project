let initialEvent = {
    media: [
      {
        url: '',
        type: '',
      },
    ],
    actions: [
      {
        comment: '-',
        task_id: '-',
        title: '-',
        user: '-',
        date: '-',
        action_taken: false,
        action_id: 0,
      },
      {
        comment: '',
        task_id: '',
        title: '-',
        user: '',
        date: '',
        action_taken: false,
        action_id: 1,
      },
    ],
    extras: {
      new: false,
      vehicle_id: 0,
      driver_id: '-',
    },
    details: [
      {
        format: 'date',
        value: '-',
        title: 'Tarih',
      },
      {
        format: 'incident_type',
        value: 'Breakdown',
        title: 'Tip',
      },
      {
        format: 'string',
        link: '/routing/operations/1',
        value: 'Plansız Rota 10:51',
        title: 'Rota İsmi',
      },
      {
        format: 'string',
        value: 'dsfvbnv ',
        title: 'Kategori',
      },
      {
        format: 'string',
        value: '-',
        title: 'Aksiyon',
      },
      {
        format: 'string',
        value: '-',
        title: 'Kalan Görev(ler)',
      },
      {
        format: 'vehicle',
        value: '06 ADN 61',
        title: 'Araç',
      },
      {
        format: 'string',
        value: 'İmren KARALAR',
        title: 'Şoför',
      },
    ],
    type: 'incident',
    id: 0,
    location: {
      latitude: 0,
      type: 'single_point',
      longitude:0,
    },
  }
  export default initialEvent