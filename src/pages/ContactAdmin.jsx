
import ContactCard from "../components/ContactCard.jsx"; // Import the ContactCard component

const ContactAdmin = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-5">
      {/* Title Section */}
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-4xl text-green-400 font-bold mb-6">
          Contact Admin
        </h2>
        <h3 className="text-2xl text-white mb-4">
          Reach out through the following channels:
        </h3>

        {/* Social Media Links Section */}
        <div className="space-y-4">
          {/* Email Card */}
          <ContactCard
            href="mailto:niteshsaxena03@gmail.com"
            iconSrc="data:image/png;base64,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" // Add the email icon link here
            title="Email"
          />

          {/* LinkedIn Card */}
          <ContactCard
            href="https://www.linkedin.com/in/niteshsaxena03/"
            iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC" // Add the LinkedIn icon link here
            title="LinkedIn"
          />

          {/* Twitter Card */}
          <ContactCard
            href="https://x.com/NiteshSaxena03"
            iconSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYG4azEl9wGw5TJHa2ct7hKic_VsexIUDlQ&s" // Add the Twitter icon link here
            title="Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactAdmin;

