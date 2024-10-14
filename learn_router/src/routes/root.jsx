import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  redirect,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";

//loader is the source of data of a particular route ::: GET
export async function loader() {
  const contacts = await getContacts();
  // the return will be {contacts:[a,b,c,d]}
  return { contacts };
}

//action is for updating/modifying data:: POST PUT DELETE
// triggered when a form is submited
export async function action() {
  const contact = await createContact();
  // first create a empty contact then use the id to redirect to edit page(we basically just reuse the edit for new)
  return redirect(`/contacts/${contact.id}/edit`);
}
// Link is just "a href=" but it can work with Outlet
//Outlet allows this to render the component based on the Link pressed
//We replaced Link with NavLink to allow styling
export default function Root() {
  //use the loader mentioned in root
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
