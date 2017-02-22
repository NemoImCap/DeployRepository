# DeployRepository
<h2> Project Structure </h2>
<p> The project consists of two parts </p>
<ul>
<li>Domain (C# class library)</li>
<li>Web.ImageApplicatiop (MVC Application)</li>
</ul>
<h3> Domain </h2>
<p>Domain lib сontains definition of DataBase Context , Repository definition is working with entities and in this project is enabled DBMigration (Migration Folder)
. If you wanna update Database, you need to use command :
<h4>Update-Database -ProjectName "Domain"</h4>
This command will inicialize db entities and use images from Web.ImageApplicatiop/Content/img folder </p>
