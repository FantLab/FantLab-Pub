function ticketsToggle()
{
  var e = document.getElementById("ticketsdiv");
  var l = document.getElementById("ticketslink");
  //var t = document.getElementById("tickets_text");

  if (!e) return true;
  if (e.style.display=="none")
  {

		e.innerHTML = '';
	var frm = document.createElement('frm');
	
	var s='<div id="ticketsdiv" width="100%">\
      <form name="ticketsform" action="/addticket" method="post" enctype="multipart/form-data">\
      ��� ������: \
      <select id="tickets_type" name="tickets_type" style="border:1px solid black;" onchange="select_ttype();">\
      <option>����� ������</option>\
      <option>�������� / ��������� �������</option>\
      <option>����������� (���������) �������</option>\
      <option>�������� ������������ ������</option>\
      <option>�������� ���������� ���� (��� ����������)</option>\
      </select><br><br>\
      <div id="tbl"></div>\
      <input type="hidden" name="tickets_add_new" value="yes">\
      <input type="hidden" name="tickets_old_action" value="show">\
	  <input type="hidden" id="tickets_text" name="tickets_text">\
      </form>  </div>';
          
	frm.innerHTML = s;
	e.appendChild(frm);
    
   document.getElementById("tickets_type").onchange(); 
	
    e.style.display="block";
    l.style.display="none";
   // t.focus();
  }
  else
  {
    e.style.display="none";
    l.style.display="block";
  }
  return true;
}

function select_ttype()
{
  var ttype=document.getElementById("tickets_type"),
      index = ttype.selectedIndex,
      ur=window.location.pathname,
      f=true,
      nm=document.title,
      tbl=document.getElementById("tbl");
  tbl.innerHTML = '';  
  
  var s='<table width="600" cellpadding="2" cellspacing="0"><tr valign="top" align="left">\
      <td><B>���� ������</B></td><td width="100%">\
      <input id="tickets_name" name="tickets_name" type="text" style="border:1px solid black;width:100%" value="'+nm+'">\
      </td></tr><tr valign="top" align="left"><td>';
  switch(index)
  {
  case 0: {
   s+='<nobr>�������, ��� �����</nobr><br>��������� ��� ���������</td>\
     <td width="100%"><textarea id="tickets_txt" name="tickets_txt" style="border:1px solid black;width:100%;height:150px"></textarea>\
     </td></tr>';
  } break;
     case 1: {
   // 	�������� �������
    s+='��������</td> <td width="100%">';
    // nm=document.querySelector('[itemprop=name]').textContent;
    s+= '<input type="edit" id="t_name" name="t_name" value="" style="width:100%"></td></tr>';
    // nm=document.querySelector('[itemprop=author]').textContent;
    s+= '<tr><td>�����</td><td><input type="edit" id="t_autors" name="t_autors" value="" style="width:100%"></td></tr> ';
    
    s+= '<tr><td>����</td><td><input type="edit" id="t_language" name="t_language" value="�������"></td></tr> ';
  
    //nm=document.querySelector('[itemprop=publisher]').textContent;
    s+= '<tr><td>������������</td><td><input type="edit" id="t_publisher" name="t_publisher" value="" style="width:100%"></td></tr> ';
    
    s+= '<tr><td>�����</td><td><input type="edit" id="t_series" name="t_series" style="width:100%"></td></tr> ';
    
    //nm=document.querySelector('[itemprop=copyrightYear]').textContent;
    s+= '<tr><td>���</td><td><input type="edit" id="t_year" name="t_year" value="" style="width:50px"></td></tr> ';
    s+= '<tr><td>�����</td><td><input type="edit" id="t_count" name="t_count"></td></tr> ';
    s+= '<tr><td>�������</td><td><input type="edit" id="t_plength" name="t_plength" value="" style="width:50px"></td></tr> ';
  
    //nm=document.querySelector('[itemprop=isbn]').textContent;
    s+= '<tr><td>ISBN</td><td><input type="edit" id="t_isbn" name="t_isbn" value="" style="width:100%"></td></tr> ';
  
    //nm=document.querySelector('[itemprop=bookFormat]').textContent;
    s+= '<tr><td>��� �������</td><td><input type="edit" id="t_covertype" name="t_covertype" value="" style="width:100%"></td></tr> ';
    s+= '<tr><td>������</td><td><input type="edit" id="t_format" name="t_format"></td></tr> ';
  
    s+= '<tr><td>��������</td><td><textarea id="t_descript" name="t_descript" style="width:100%;height:40px"></textarea></td></tr> ';
    s+= '<tr><td>����������</td><td><textarea id="t_content" name="t_content" style="width:100%;height:80px"></textarea></td></tr> ';
    s+= '<tr><td>����������</td><td><textarea id="t_note" name="t_note" style="width:100%;height:40px"></textarea></td></tr> ';
    s+= '<tr><td></td><td align="center"><label><input id="t_green" name="t_green" type="checkbox">���������� ������� � �������� �����, ������ � ����������� (����� ������� ������ �����)</label>';
    }break;
    case 2: {
  //    ���������
  if (ur.indexOf('edition')==-1) {f=false; break; }
     s+= '<tr><td></td><td align="center"><label><input id="t_green" name="t_green" type="checkbox">�����������: ������� � �������� ������ - ���������� � �������� ������� ������ � �����������, ����� ������� ������ �����</label>';	
	 s+= '<tr><td>����������</td><td><textarea id="t_note" name="t_note" style="width:100%;height:40px"></textarea></td></tr> ';
}    break;
    case 3: {
   //   �������� ����
  if (ur.indexOf('autor')==-1) {f=false; break; }
	s+= '<tr><td>���</td><td><input type="edit" id="t_year" name="t_year"></td></tr> ';
	s+= '<tr><td>��������</td> <td width="100%"><input type="edit" id="t_name" name="t_name" style="width:100%"></td></tr>';
	s+= '<tr><td>����������</td><td><textarea id="t_note" name="t_note" style="width:100%;height:30px"></textarea></td></tr> ';
	s+= '<tr><td>������ �� ��������</td> <td width="100%"><input type="edit" id="t_url" name="t_url" style="width:100%"></td></tr>';
}    break;
    case 4: {
   //   ���������� ����
    s+= '<tr><td>���������� ����</td><td><textarea id="t_content" name="t_content" style="width:100%;height:80px"></textarea></td></tr> ';
	s+= '<tr><td>����������</td><td><textarea id="t_note" name="t_note" style="width:100%;height:30px"></textarea></td></tr> ';
	s+='<tr><td>������ �� ��������</td> <td width="100%"><input type="edit" id="t_url" name="t_url" style="width:100%"></td></tr>';
}    break;
  }
  s+= '<tr valign="top" align="left"><td>���������� ����</td>\
      <td width="100%"><input name="tickets_file" type="file" style="border:1px solid black;width:100%" value="">\
      &nbsp;<font size="-2" color="gray">(��������� ������ ����� ������� ����� �������)</font></td></tr>\
      </td> </tr>\
      <tr align="center"> <td colspan="2">\
      <input type="submit" style="cursor:pointer" onclick="return ticketsSubmit();" style="width:144px" value="��������� ������">\
      <input type="button" style="cursor:pointer" value="������" onclick="return ticketsToggle()">\
      </td></tr></table>';
    
  if (f) {
  var trtd = document.createElement('trtd');
  trtd.innerHTML=s;
  tbl.appendChild(trtd);}
}

function ticketsSubmit()
{
   if (document.getElementById("tickets_name").value.length<1)
  {
    alert("������� ���� ������!");
    return false
  }
  
  var ttype=document.getElementById("tickets_type"),
      index = ttype.selectedIndex,
      s;
  
  switch(index){
  case 0: {
	s=document.getElementById("tickets_txt").value;
  } break;      
  case 1: {
	s='��������: '+document.getElementById("t_name").value+ '\n\
�����: '+document.getElementById("t_autors").value+ '\n\
����: '+document.getElementById("t_language").value+ '\n\
������������: '+document.getElementById("t_publisher").value+ '\n\
�����: '+document.getElementById("t_series").value+ '\n\
���: '+document.getElementById("t_year").value+ '\n\
�����: '+document.getElementById("t_count").value+ '\n\
ISBN: '+document.getElementById("t_isbn").value+ '\n\
��� �������: '+document.getElementById("t_covertype").value+ '\n\
������: '+document.getElementById("t_format").value+ '\n\
��������: '+document.getElementById("t_descript").value+ '\n\
����������: '+document.getElementById("t_content").value+ '\n\
����������: '+document.getElementById("t_note").value;
	if (document.getElementById("t_green").checked) {s+='���������� ������� � �������� �����, ������ � ����������� (����� ������� ������ �����)'}
  } break;
  case 2: {
	s='����������: '+document.getElementById("t_note").value;
	if (document.getElementById("t_green").checked) {s+='�����������: ������� � �������� ������ - ���������� � �������� ������� ������ � �����������, ����� ������� ������ �����'}
  } break;

  case 3: {
	s='���: '+document.getElementById("t_year").value+'\n\
��������: '+document.getElementById("t_name").value+'\n\
����������: '+document.getElementById("t_note").value+'\n\
��������: '+document.getElementById("t_url").value;

  } break;
  case 4: {
	s='���������� ����: '+document.getElementById("t_content").value+'\n\
����������: '+document.getElementById("t_note").value+'\n\
��������: '+document.getElementById("t_url").value;

  } break;
  }
    document.getElementById("tickets_text").value=s;  
  
  if (document.getElementById("tickets_text").value.length<1)
  {
    alert("������� ������!");
    return false
  }
  else
  {
    //alert (document.getElementById("tickets_text").value);
    ticketsform.submit();
  
    this.disabled=true;
   }
}