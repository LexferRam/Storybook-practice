import {render, screen} from '@testing-library/react'
import Users from './Users';

const data =[
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
    },
]

it("Should show a list of users from the API", async () => {

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(data),
        }),
    ) as jest.Mock;
    
    render(<Users users={data}/>);
    // screen.debug()

    for(let user of data){
      expect(await screen.findByText(user.name)).toBeInTheDocument()
    }

  })


