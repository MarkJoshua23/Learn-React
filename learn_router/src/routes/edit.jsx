import {
    Form,
    useLoaderData,
    redirect,
  } from "react-router-dom";
  import { updateContact } from "../contacts";
  
  export async function action({ request, params }) {
    //request is the one that carries the values submitted by form, u can access it through formData()
    const formData = await request.formData();
    //now you can use the inputt name as the key, ex updates.first is the firstname
    const updates = Object.fromEntries(formData);
    //you can still access the params using its name (contactId)
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
  }

export default function EditContact() {
  const { contact } = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}