window.logic98 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
cmd_print_v(17);
cmd_quit(1);
return;

}}}
MESSAGES[98]=[
"",
"discard_view(%v18):%m30",
"set_view(%v18,_):%m26",
"set_view(_,%v18):%m30",
"set_loop(%v18,_):%m26",
"set_loop(%v18,_):\nBad loop #.%m25",
"set_loop(%v18,_):%m31",
"set_cel(%v18,_):%m26",
"set_cel(%v18,_):\nBad cel #.%m25",
"sound(%v18):\nSound not loaded.%m25",
"set_cel(%v18,_):%m31",
"Script buffer overflow.\nMaximum size = %v18%m25",
"erase(%v18):%m26",
"animate_obj(%v18):%m26",
"stop_update(%v18):%m28",
"Bad test: %v18%m25",
"Bad action: %v18%m25",
"start_update(%v18):%m28",
"draw_pic(%v18):%m32",
"draw(%v18):%m26",
"draw(%v18):%m31",
"discard_pic(%v18):%m32",
"",
"get(%v18) or put(%v18):%m26",
"",
"\nPress ESC to quit.",
"%m27.%m25",
"\nBad object number",
"%m27 or object not drawn.%m25",
"\nView not ",
"%m29loaded.%m25",
"%m29set.%m25",
"Picture not loaded.%m25"];