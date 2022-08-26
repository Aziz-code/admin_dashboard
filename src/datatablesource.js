export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Jon",
    img: "https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/16:9/w_1280,c_limit/jon-snow-series-1200.jpeg",
    status: "active",
    email: "jkhakjd@klj.com",
    age: 35,
  },
  {
    id: 2,
    username: "Sansa",
    img: "https://ca-times.brightspotcdn.com/dims4/default/8cd0e7e/2147483647/strip/true/crop/2048x1362+0+0/resize/1486x988!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb3%2F5c%2F7b5ee0c0b6fd64aeeec6ad038367%2Fla-et-game-of-thrones-house-stark-through-the-043",
    status: "active",
    email: "jkhakjd@klj.com",
    age: 25,
  },
  {
    id: 3,
    username: "Arya",
    img: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/arya%20starkk%20main%20image.png?itok=GSEThK5u",
    status: "passive",
    email: "jkhakjd@klj.com",
    age: 22,
  },
  {
    id: 4,
    username: "Jamie",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
    status: "pending",
    email: "jkhakjd@klj.com",
    age: 53,
  },
  {
    id: 5,
    username: "Danaerys",
    img: "https://s3.r29static.com/bin/entry/db4/179,3,1819,1364/x,80/1647270/image.jpg",
    status: "passive",
    email: "jkhakjd@klj.com",
    age: 32,
  },
  {
    id: 6,
    username: "Cersie",
    img: "https://upload.wikimedia.org/wikipedia/en/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg",
    status: "active",
    email: "jkhakjd@klj.com",
    age: 39,
  },
  {
    id: 7,
    username: "Tyrion",
    img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
    status: "pending",
    email: "jkhakjd@klj.com",
    age: 49,
  },

  {
    id: 8,
    username: "Tyrion",
    img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
    status: "pending",
    email: "jkhakjd@klj.com",
    age: 49,
  },

  {
    id: 9,
    username: "Tyrion",
    img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
    status: "pending",
    email: "jkhakjd@klj.com",
    age: 49,
  },

  {
    id: 10,
    username: "Tyrion",
    img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
    status: "pending",
    email: "jkhakjd@klj.com",
    age: 49,
  },
];
