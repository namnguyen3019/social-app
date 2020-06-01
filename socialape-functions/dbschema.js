const db = {
    users: [
        {
            userId: "1213131",
            email: "asdf@email.com",
            handle: "user",
            createdAt: "adsfafa",
            imageUrl: "image/asdfaf",
            bio: "Hello, my name is",
            website: "abc.com",
            location: "location"
        }
    ],
    screams: [
        {
            userHandle: "user",
            body: "This is body scream",
            createdAt: "2020-05-24T15:24:44.684Z",
            likeCount: 10,
            commentCount: 2
        }
    ],

    comments: [
        {
            userHandle: "user",
            screamId: "asdfasf1",
            body: "nice body",
            createdAt: "adsfaf"
        }
    ],

    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'asdfasfasf',
            type: 'like | comment',
            createdAt: "time"
        }
    ]

};

const userDetails = {
    //Redux data
    credentials: {
        userId: "asdafasdfas",
        email: "email@gmail",
        handle: "user",
        createdAt: "asdfasf",
        imageUrl: "image/asdfasfa",
        bio: "Hello, my name is Name",
        website: "website.com",
        location: "LA, USA"
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'asdfasf23rqaf',
        },
        {
            userHandle: 'user',
            screamId: 'asdfasf23rasdfqaf',
        }
    ]
}