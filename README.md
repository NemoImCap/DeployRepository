# DeployRepository
<h2> Connection local DB</h2>
<p> If you use SQL 2014 you need to change connection string in Web.config</p>
<code> name="EfDbContext" connectionString="Data Source=(localdb)\mssqllocaldb; Initial Catalog=EfDbContext; Integrated Security=True" providerName="System.Data.SqlClient" </code>
<h2> Project Structure </h2>
<p> The project consists of two parts </p>
<ul>
<li>Domain (C# class library)</li>
<li>Web.ImageApplicatiop (MVC Application)</li>
</ul>
<h3> Domain </h3>
<p>Domain lib сontains definition of DataBase Context , Repository definition is working with entities and in this project is enabled DBMigration (Migrations Folder). If you wanna init/update Database, you need to change folder path to your app directory in Domain/Migrations/Configuration.cs <code>var getFiles = Directory.GetFiles(root + "\\ImageApplication\\DeployRepository\\ImageApplication\\Web.ImageApplication\\Content\\images");</code> and use command :
<h4>Update-Database -ProjectName "Domain"</h4>
This command will inicialize db entities and use images from Web.ImageApplicatiop/Content/img folder </p>
